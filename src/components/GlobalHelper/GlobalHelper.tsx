import * as React from 'react';
import {Popover, PopoverProps} from 'wix-ui-core/dist/src/baseComponents/Popover/Popover';
import style from './GlobalHelper.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {createComponentThatRendersItsChildren, ElementProps} from 'wix-ui-core/dist/src/utils';
import {DataHooks} from './DataHooks';

/**
 * Adapts Popover API with Popover.Element, and Popover.Content into regular props
 */
export interface PopoverAdapterProps {
  // TODO: should this be optional? if we expose 'appandTo' and 'appendToParent'?
  /** children to render that will be the target of the tooltip */
  children: React.ReactNode;
  // TODO: add validation that it is a <HelperContent> component
  /** the content to put inside the Popover. Should be a <HelperContent> component. */
  content: React.ReactNode;
}

export interface GlobalHelperOwnProps {
}

export type PickedPopoverProps = Pick<PopoverProps, 'placement'|'shown'|'moveBy'|'hideDelay'|'showDelay'|'appendTo'|'appendToParent'|'timeout'>;
export type GlobalHelperProps = PickedPopoverProps & PopoverAdapterProps & GlobalHelperOwnProps;

const getState: (p?: any, s?: any, c?: any) => StateMap = p => ({});
const PopoverBO = withStylable<PopoverProps, GlobalHelperOwnProps>(
  Popover,
  style,
  p => ({})
);
// TODO: add close button behavior
export const GlobalHelper: React.SFC<GlobalHelperProps> = props => {
  const {children, content, ...rest} = props;
  return (
    <PopoverBO
      {...rest}
      showArrow={true}
    >
      <Popover.Element>
          {children}
        </Popover.Element>
        <Popover.Content>
          <div data-hook={DataHooks.innerContent} className={style.innerContent}>
            {content}
          </div>
        </Popover.Content>
    </PopoverBO>
  );
};
