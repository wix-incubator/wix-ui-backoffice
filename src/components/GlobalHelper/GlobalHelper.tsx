import * as React from 'react';
import {Popover, PopoverProps} from 'wix-ui-core/dist/src/baseComponents/Popover/Popover';
import style from './GlobalHelper.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {createComponentThatRendersItsChildren, ElementProps} from 'wix-ui-core/dist/src/utils';

const noop = () => null;

/**
 * Adapts Popover API with Popover.Element, and Popover.Content into regular props
 */
export interface PopoverAdapterProps {
  /** children to render that will be the target of the tooltip */
  children: React.ReactNode;
  /** the content to put inside the tooltip */
  content: React.ReactNode;
}

export interface GlobalHelperOwnProps {
}

export type GlobalHelperProps = PopoverProps & PopoverAdapterProps & GlobalHelperOwnProps;

export type GlobalHelperType = React.SFC<GlobalHelperProps>;

const defaultProps = {
};

const getState: (p?: any, s?: any, c?: any) => StateMap = (p) => ({});

const GlobalHelperBO = withStylable<PopoverProps, GlobalHelperOwnProps>(
  Popover,
  style,
  getState,
  defaultProps
);

export const GlobalHelper: GlobalHelperType = (props) => {
  const {children, content, ...rest} = props;
  return (
    <GlobalHelperBO {...rest}>
      <Popover.Element>
          {children}
        </Popover.Element>
        <Popover.Content>
          <div className={style.innerContent}>
            {content}
          </div>
        </Popover.Content>
    </GlobalHelperBO>
  );
};
