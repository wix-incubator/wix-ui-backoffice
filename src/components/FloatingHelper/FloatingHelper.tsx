import * as React from 'react';
import pick = require('lodash/pick');
import {Popover, PopoverProps} from 'wix-ui-core/Popover';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './FloatingHelper.st.css';
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

const PickedPopoverPropTypes = pick(Popover.propTypes, 'placement', 'shown', 'moveBy', 'hideDelay', 'showDelay', 'appendTo', 'timeout');
export type PickedPopoverProps = Pick<PopoverProps,    'placement'| 'shown'| 'moveBy'| 'hideDelay'| 'showDelay'| 'appendTo' | 'timeout'>;
export type FloatingHelperProps = PickedPopoverProps & PopoverAdapterProps;

const FloatingHelperBO = withStylable<PopoverProps, {}>(
  Popover,
  style,
  p => ({})
);

export const FloatingHelper: React.SFC<FloatingHelperProps> = props => {
  const {children, content, ...rest} = props;
  return (
    <FloatingHelperBO
      {...rest}
      showArrow
    >
      <Popover.Element>
          {children}
        </Popover.Element>
        <Popover.Content>
          <div data-hook={DataHooks.innerContent} className={style.innerContent}>
            {content}
          </div>
        </Popover.Content>
    </FloatingHelperBO>
  );
};

FloatingHelper.propTypes = {
  ...PickedPopoverPropTypes
};
