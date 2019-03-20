import * as React from 'react';

type LoadedComponent<Props> = { [key: string]: React.ComponentType<Props> };

export interface LoadableProps<Props> {
  /** loader for a component. `import('./Component')` */
  loader():
    | Promise<LoadedComponent<Props>>
    | LoadedComponent<Props>
    | React.ComponentType<Props>;

  /** component to show while not loading and `shouldLoadComponent` is false */
  defaultComponent?: React.ComponentType<Props> | (() => null);

  /** component to show while loading */
  loadingComponent: React.ComponentType<Props> | (() => null);

  /** key to access the field inside module. `default` by default */
  componentKey?: string;

  /** key to trigger lazy-loading */
  shouldLoadComponent?: boolean;
}

export interface LoadableState {
  Component: React.ComponentType;
  isLoading: boolean;
}

export class Loadable<Props> extends React.Component<
  Props & LoadableProps<Props>,
  LoadableState
> {
  constructor(props) {
    super(props);

    let Component = null;

    if (props.shouldLoadComponent) {
      Component = this.loadSyncOrAsync();
    }

    this.state = {
      Component,
      isLoading: !Component,
    };
  }
  componentDidUpdate(prevProps) {
    // Here we want to start loading the component only when `shouldLoadComponent` was changed
    // and we are not already loading the component.
    if (
      !this.state.Component &&
      !prevProps.shouldLoadComponent &&
      this.props.shouldLoadComponent &&
      !this.state.isLoading
    ) {
      let Component = null;
      Component = this.loadSyncOrAsync();
      this.setState({ Component, isLoading: !Component });
    }
  }
  /* For node.js environment (unit tests) it will be transpiled into sync `require`.
   We don't want to break them and allowing to have both sync and async flow according to environment.
   With webpack build (development, e2e) we'll have `import` not transpiled to `require`, which will create
   async flow. We should determine type of flow and according to it sync or async set the state.
  */
  private loadSyncOrAsync = (): React.ComponentType => {
    const { loader, componentKey = 'default' } = this.props;
    let Component = loader();
    // Handling `import('Tooltop') -> Promise<module>`
    if (Component instanceof Promise) {
      Component.then(resolvedModule => {
        const ModuleComponent = resolvedModule[componentKey];
        this.setState({ Component: ModuleComponent, isLoading: false });
      }).catch(() => {
        this.setState({ Component: null, isLoading: false });
      });
      return null;
      // Handling `require('Tooltop') -> { default: Tooltip }`
    } else if (typeof Component !== 'function') {
      return Component[componentKey];
    }
    // Handling `require('Tooltop') -> Tooltip`
    return Component;
  };
  render() {
    const { Component, isLoading } = this.state;
    const {
      shouldLoadComponent,
      defaultComponent,
      loadingComponent,
      componentKey,
      loader,
      children,
      ...otherProps
    } = this.props;

    // Handling loader. Using defaultComponent if no loader was specified.
    if (isLoading) {
      return loadingComponent || defaultComponent;
      // Handling error or component when loading wasn't started
    } else if (!shouldLoadComponent || !Component) {
      return defaultComponent;
    }
    // Rendering original loaded component.
    return React.createElement(Component, otherProps, children);
  }
}
