import * as React from 'react';
import pick = require('lodash/pick');
import { bool, string, number, oneOfType, node } from 'prop-types';
import * as classnames from 'classnames';
import { ClosablePopover, ClosablePopoverProps, ClosablePopoverActions } from './ClosablePopover';
import style from './FloatingHelper.st.css';
import { DataHooks } from './DataHooks';
import { Button } from '../Button';
import { Skin, Size } from '../Button/constants';
import { CloseButton, CloseButtonSkin, CloseButtonSize } from '../CloseButton';

export interface FloatingHelperOwnProps {
  /** Controls wether a close button will appear ot not */
  showCloseButton?: boolean;
  /** Width HTML attribute of the content. If a number is passed then it defaults to px. e.g width={400} => width="400px" */
  width?: string | number;
  /** The target of the popover */
  children?: React.ReactNode
  /** A <HelperContent> */
  content: React.ReactNode
}

export type PickedClosablePopoverProps = Pick<ClosablePopoverProps,
  'initiallyOpened' | 'placement' | 'moveBy' | 'hideDelay' | 'showDelay' | 'appendTo'>;
const pickedPropNames: Array<keyof PickedClosablePopoverProps> =
  ['initiallyOpened', 'placement', 'moveBy', 'hideDelay', 'showDelay', 'appendTo'];

const pickedPopoverPropTypes = pick<
  typeof ClosablePopover.propTypes, keyof PickedClosablePopoverProps>(
    ClosablePopover.propTypes, ...pickedPropNames);

export type FloatingHelperProps = PickedClosablePopoverProps & FloatingHelperOwnProps;

export const FloatingHelper: React.SFC<FloatingHelperProps> = props => {
  const { children, width, content, showCloseButton, ...rest } = props;

  const renderContent = (closableActions: ClosablePopoverActions) => (
    <div data-hook={DataHooks.contentWrapper} style={{ width }}>
      {showCloseButton && (
        <CloseButton
          className={style.closeButton}
          data-hook={DataHooks.closeButton}
          onClick={closableActions.close}
          skin={CloseButtonSkin.white}
          size={CloseButtonSize.large}
        />
      )}
      <div data-hook={DataHooks.innerContent} className={style.innerContent}>
        {content}
      </div>
    </div>
  )
  
  const closablePopoverProps : ClosablePopoverProps = {
    ...rest,
    content: renderContent,
    target:children,
    showArrow: true
  };

  // TODO: hoist open/close method from ClosablePopover

  return (
    <ClosablePopover
      {...closablePopoverProps}
      {...style('root', {}, props)}
    />
  );
};

FloatingHelper.defaultProps = {
  showCloseButton: true,
  appendTo: 'window',
  width: '444px',
  initiallyOpened: true
};

FloatingHelper.propTypes = {
  ...pickedPopoverPropTypes,
  showCloseButton: bool,
  width: oneOfType([string, number]),
  children: node.isRequired,
  content: node.isRequired // TODO: validate it is a <HelperContent>
};
