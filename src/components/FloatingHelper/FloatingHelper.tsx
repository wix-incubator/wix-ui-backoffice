import * as React from 'react';
import pick = require('lodash/pick');
import { string, number, oneOfType, node, Requireable, ValidationMap} from 'prop-types'
import * as classnames from 'classnames';
import { ClosablePopover, ClosablePopoverProps, ClosablePopoverActions } from './ClosablePopover';
import style from './FloatingHelper.st.css';
import { DataHooks } from './DataHooks';
import { Button } from '../Button';
import { Skin, Size } from '../Button/constants';
import { CloseButton, CloseButtonSkin, CloseButtonSize } from '../CloseButton';
import { FloatingHelperContent , FloatingHelperContentProps} from './FloatingHelperContent';

export interface FloatingHelperOwnProps {
  /** Width HTML attribute of the content. If a number is passed then it defaults to px. e.g width={400} => width="400px" */
  width?: string | number;
  /** The target of the popover */
  target: React.ReactNode
  /** A <HelperContent> */
  content: React.ReactNode
}

export type PickedClosablePopoverProps = Pick<ClosablePopoverProps,
   'initiallyOpened'| 'target'| 'onClose'| 'onOpen'| 'placement'| 'moveBy'| 'hideDelay'| 'showDelay'| 'appendTo'>;
const pickedPropNames: Array<keyof PickedClosablePopoverProps> =
  ['initiallyOpened', 'target', 'onClose', 'onOpen', 'placement', 'moveBy', 'hideDelay', 'showDelay', 'appendTo'];

const pickedPopoverPropTypes = pick<
  typeof ClosablePopover.propTypes, keyof PickedClosablePopoverProps>(
    ClosablePopover.propTypes, ...pickedPropNames);

export type FloatingHelperProps = PickedClosablePopoverProps & FloatingHelperOwnProps;

export class FloatingHelper extends React.Component<FloatingHelperProps> {
  closablePopoverRef: ClosablePopover;
  
  static Content = FloatingHelperContent;

  static defaultProps: Partial<FloatingHelperProps> = {
    appendTo: 'window',
    width: '444px',
    initiallyOpened: true
  };

  static propTypes : ValidationMap<FloatingHelperProps>= {
    ...pickedPopoverPropTypes,
    width: oneOfType([string, number]),
    target: node.isRequired,
    content: node.isRequired // TODO: validate it is a <HelperContent>
  };

  open = () => { this.closablePopoverRef.open() };

  close = () => { this.closablePopoverRef.close() };

  renderContent(closableActions: ClosablePopoverActions, {width, content}: Partial<FloatingHelperProps>) {
    return (
      <div data-hook={DataHooks.contentWrapper} style={{ width }}>
        <CloseButton
          className={style.closeButton}
          data-hook={DataHooks.closeButton}
          onClick={closableActions.close}
          skin={CloseButtonSkin.white}
          size={CloseButtonSize.large}
        />
        <div data-hook={DataHooks.innerContent} className={style.innerContent}>
          {content}
        </div>
      </div>
    )
  }

  render() {
    const { children, width, content, ...rest } = this.props;

    const renderContent = (closableActions: ClosablePopoverActions)=>this.renderContent(closableActions,{width, content});

    const closablePopoverProps: ClosablePopoverProps = {
      ...rest,
      content: renderContent,
      showArrow: true,
      closeOnMouseLeave: false // TODO: We pass this as a workaround because with React-15 the mouse-enter does not propagate from the Portal to the React-Popper's Manager
    };

    return (
      <ClosablePopover
        {...closablePopoverProps}
        ref={ref => this.closablePopoverRef = ref}
        {...style('root', {}, this.props)}
      />
    );
  };
}
