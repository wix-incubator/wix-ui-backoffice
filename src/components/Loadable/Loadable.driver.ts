import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface LoadableDriver extends BaseDriver {
  isLoaded: () => boolean;
  toggleShouldLoadComponents: () => {}
}

export const loadableDriverFactory = ({
  childFactory,
  childSelector,
}: {
  childFactory: (arg: ComponentFactory) => BaseDriver;
  childSelector: (element: Element) => Element;
}) => ({
  element,
  eventTrigger,
  wrapper,
  component,
}: ComponentFactory): LoadableDriver => {
  const getChildFactory = () => {
    return childFactory({
      element: childSelector(element),
      eventTrigger,
      wrapper,
    });
  }

  return {
    exists: () => !!element,
    toggleShouldLoadComponents: () => component.props(),
    isLoaded: () => getChildFactory().exists(),
  };
};
