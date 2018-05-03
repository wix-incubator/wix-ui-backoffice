import * as React from 'react';
import {Requireable, bool, func, node} from "prop-types";
import isBoolean = require('lodash/isBoolean');
import pick = require('lodash/pick');
import { Popover, PopoverProps } from 'wix-ui-core/Popover';

export interface ClosableActions {
  /** Closes the popover content*/
  close: () => void;
}

export interface ClosableProps {
  /** Controls wether the popover's content is shown or not. 
   * When undefined, then the component is Uncontrolled,
   * It is initially open, and it can be closed by close-action */
  opened?: boolean;
  /** Called when the popover's content is closed. (Either by clicking on the close-button, click out-side, or by the close action) */
  onClose?: () => void;
  content: (closable: ClosableActions) => React.ReactNode;
  target: React.ReactNode;
}

export interface ClosablePopoverState {
  opened?: boolean;
}

const pickedPopoverPropTypes = pick(Popover.propTypes, ['className', 'placement', 'showArrow', 'moveBy', 'hideDelay', 'showDelay', 'moveArrowTo', 'appendTo', 'timeout']);
export type PickedPopoverProps = Pick<PopoverProps,     'className'| 'placement'| 'showArrow'| 'moveBy'| 'hideDelay'| 'showDelay'| 'moveArrowTo'| 'appendTo'| 'timeout'>;

export type ClosablePopoverProps = PickedPopoverProps & ClosableProps;

/**
 * Closable Popover
 * Either a normal Controlled Popover, or a Popover that is inittialy opened and can be the closed by
 * calling a closeAction.
 */
export class ClosablePopover extends React.PureComponent<ClosablePopoverProps, ClosablePopoverState> {
  state: ClosablePopoverState = {opened:true};

  static propTypes: React.ValidationMap<ClosablePopoverProps> = {
    ...pickedPopoverPropTypes,
    opened: bool,
    onClose: func,
    content: func,
    target: node
  };

  get isControlled() {
    return isBoolean(this.props.opened);
  }

  render() {
    const open = this.isControlled ? this.props.opened : this.state.opened;
    // const popoverProps = pick(this.props, ['className', 'placement', 'showArrow', 'moveBy', 'hideDelay', 'showDelay', 'moveArrowTo', 'appendTo', 'timeout']);
    const {opened, onClose, content, target, children, ...rest} = this.props;

    // Using createElement() in order to get ts props validation.
    return React.createElement(Popover,{shown: open, ...rest},(
      <Popover.Element>
          {target}
        </Popover.Element>
      ),(
      <Popover.Content>
        {content(this.actions)}
      </Popover.Content>
      )
    );
  }
  
  public close = ()=> {
    if (this.isControlled) {
       throw new Error('ClosablePopover.close() can not be called when component is Controlled. (opened prop should be undefined)');
    }
    if (this.state.opened) {
      this.setState({ opened: false }, () => {
        this.props.onClose && this.props.onClose();
      });
    }
  }

  actions: ClosableActions = {
    close: this.close,
  };
};