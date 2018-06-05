import * as React from 'react';
import { bool, func, node , ValidationMap} from 'prop-types';
import isBoolean = require('lodash/isBoolean');
import pick = require('lodash/pick');
import { Popover, PopoverProps, Placement, AppendTo } from 'wix-ui-core/Popover';

export {Placement, AppendTo};

export interface ClosablePopoverActions {
  /** Closes the popover content*/
  close: () => void;
}

export interface ClosablePopoverOwnProps {
  /** Controls wether the popover's content is shown or not. 
   * When undefined, then the component is Uncontrolled,
   * It is initially open, and it can be closed by close-action */
  opened?: boolean;
  /** Controls wether the popover's content is initially opened (in Uncontrolled mode only) */
  initiallyOpened?: boolean;
  /** The popover's content, given as a function that receives control-actions and renders the contet.
   * In Uncontrolled mode, this function is still called only once.
  */
  content: (closable: ClosablePopoverActions) => React.ReactNode;
  /** The popover's target element*/
  target: React.ReactNode;
  /** Callback to call when the popover content is requested to be opened (Uncontrolled mode only) */
  onOpen?: Function;
  /** callback to call when the popover content is requested to be closed (Uncontrolled mode only). NOTE: this callback is called when the close timeout (if exists) starts */
  onClose?: Function;
  /** Disable close on mouseLeave */
  closeOnMouseLeave?: boolean
}

export enum Mode {
  Hover = 'hover',
  ClickToClose = 'click-to-close'
} 

export interface ClosablePopoverState {
  open?: boolean;
  mode?: Mode;
}

const pickedPopoverPropTypes = pick(Popover.propTypes, ['className', 'placement', 'showArrow', 'moveBy', 'hideDelay', 'showDelay', 'moveArrowTo', 'appendTo', 'timeout']);
export type PickedPopoverProps = Pick<PopoverProps, 'className' | 'placement' | 'showArrow' | 'moveBy' | 'hideDelay' | 'showDelay' | 'moveArrowTo' | 'appendTo' | 'timeout'>;

export type ClosablePopoverProps = PickedPopoverProps & ClosablePopoverOwnProps;
const controlledErrorMsg = (method: string)=> `ClosablePopover.${method}() can not be called when component is Controlled. (opened prop should be undefined)`;
/**
 * Closable Popover
 * Either a normal Controlled Popover, or a Popover that is inittialy opened and can be the closed by
 * calling a closeAction.
 */
export class ClosablePopover extends React.PureComponent<ClosablePopoverProps, ClosablePopoverState> {
  state: ClosablePopoverState = { 
    open: this.props.initiallyOpened,
    mode: this.props.initiallyOpened? Mode.ClickToClose : Mode.Hover };

  static propTypes: ValidationMap<ClosablePopoverProps> = {
    ...pickedPopoverPropTypes,
    opened: bool,
    content: func,
    target: node,
    onOpen: func,
    onClose: func,
  };

  static defaultProps: Partial<ClosablePopoverProps> = {
    timeout: 150,
    initiallyOpened: true,
    closeOnMouseLeave: true
  }

  private isControlled() {
    return isBoolean(this.props.opened);
  }

  public open = () => {
    this.doOpen(Mode.ClickToClose);
  }

  private doOpen = (nextMode: Mode) => {
    if (this.isControlled()) {
      throw new Error(controlledErrorMsg('open'));
    }
    !this.state.open && this.setState({
        open: true,
        mode: nextMode
      }, () => { this.props.onOpen && this.props.onOpen() });
  }

  public close = () => {
    if (this.isControlled()) {
      throw new Error(controlledErrorMsg('close'));
    }
    this.state.open && this.setState({
        open: false,
        mode: Mode.Hover
      }, () => { this.props.onClose && this.props.onClose() });
  }

  private handleMouseEnter = () => {
    if (this.state.mode === Mode.Hover) {
      this.doOpen(Mode.Hover);
    }
  }

  private handleMouseLeave = () => {
    if (this.state.mode === Mode.Hover && this.props.closeOnMouseLeave) {
      this.close();
    }
  }

  render() {
    const { opened, content, target, children, onClose, onOpen, initiallyOpened, closeOnMouseLeave, ...rest } = this.props;
    const open = this.isControlled() ? this.props.opened : this.state.open;

    const popoverProps: PopoverProps = {
      ...rest,
      shown: open,
      onMouseEnter: this.handleMouseEnter,
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

