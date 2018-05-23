import * as React from 'react';
import { Requireable, bool, func, node } from 'prop-types';
import isBoolean = require('lodash/isBoolean');
import pick = require('lodash/pick');
import { Popover, PopoverProps } from 'wix-ui-core/Popover';

export interface ClosablePopoverActions {
  /** Closes the popover content*/
  close: () => void;
}

export interface ClosablePopoverOwnProps {
  /** Controls wether the popover's content is shown or not. 
   * When undefined, then the component is Uncontrolled,
   * It is initially open, and it can be closed by close-action */
  opened?: boolean;
  /** The popover's content, given as a function that receives control-actions and renders the contet.
   * In Uncontrolled mode, this function is still called only once.
  */
  content: (closable: ClosablePopoverActions) => React.ReactNode;
  /** The popover's target element*/
  target: React.ReactNode;
  /** callback to call when the popover content was opened */
  onOpen?: Function;
  /** callback to call when the popover content was closed. NOTE: this callback is called when the close timeout (if exists) starts */
  onClose?: Function;
}

export interface ClosablePopoverState {
  open?: boolean;
  wasClosed: boolean;
}

const pickedPopoverPropTypes = pick(Popover.propTypes, ['className', 'placement', 'showArrow', 'moveBy', 'hideDelay', 'showDelay', 'moveArrowTo', 'appendTo', 'timeout']);
export type PickedPopoverProps = Pick<PopoverProps, 'className' | 'placement' | 'showArrow' | 'moveBy' | 'hideDelay' | 'showDelay' | 'moveArrowTo' | 'appendTo' | 'timeout'>;

export type ClosablePopoverProps = PickedPopoverProps & ClosablePopoverOwnProps;

/**
 * Closable Popover
 * Either a normal Controlled Popover, or a Popover that is inittialy opened and can be the closed by
 * calling a closeAction.
 */
export class ClosablePopover extends React.PureComponent<ClosablePopoverProps, ClosablePopoverState> {
  state: ClosablePopoverState = { open: true, wasClosed: false };

  static propTypes: React.ValidationMap<ClosablePopoverProps> = {
    ...pickedPopoverPropTypes,
    opened: bool,
    content: func,
    target: node,
    onOpen: func,
    onClose: func,
  };

  static defaultProps: Partial<ClosablePopoverProps> = {
    timeout: 150
  }

  isControlled() {
    return isBoolean(this.props.opened);
  }

  open = () => {
    if (this.isControlled()) {
      throw new Error('ClosablePopover.open() can not be called when component is Controlled. (opened prop should be undefined)');
    }
    if (!this.state.open) {
      this.setState({ open: true }, () => { this.props.onOpen && this.props.onOpen() });
    }
  }

  close = () => {
    if (this.isControlled()) {
      throw new Error('ClosablePopover.close() can not be called when component is Controlled. (opened prop should be undefined)');
    }
    this.state.open && this.setState({ open: false, wasClosed: true }, () => { this.props.onClose && this.props.onClose() });
  }

  handleMouseLeave = () => {
    if (this.state.wasClosed) {
      this.close();
    }
  }

  render() {
    const { opened, content, target, children, onClose, onOpen, ...rest } = this.props;
    const open = this.isControlled() ? this.props.opened : this.state.open;

    const popoverProps: PopoverProps = {
      ...rest,
      shown: open,
      onMouseEnter: this.open,
      onMouseLeave: this.handleMouseLeave
    };

    return (
      <Popover
        {...popoverProps}
      >
        <Popover.Element>
          {target}
        </Popover.Element>
        <Popover.Content>
          {content(this.actions)}
        </Popover.Content>
      </Popover>
    );
  }

  actions: ClosablePopoverActions = {
    close: this.close,
  };
};

