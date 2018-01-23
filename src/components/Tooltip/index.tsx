import {Tooltip as CoreTooltip, TooltipProps as CoreTooltipProps} from 'wix-ui-core/Tooltip';
import style from './Tooltip.st.css';
import {withStylable} from 'wix-ui-core';

const noop = () => {};

export type Point = {
  x: number;
  y: number;
};

export interface TooltipProps {
  textAlign?: string;
  children?: any;
  content: any; // isRequired
  placement?: 'top' | 'right' | 'bottom' | 'left';
  alignment?: 'top' | 'right' | 'bottom' | 'left' | 'center';
  theme?: 'light' | 'dark' | 'error';
  showDelay?: number;
  hideDelay?: number;
  showTrigger?: 'custom' | 'mouseenter' | 'mouseleave' | 'click' | 'focus' | 'blur';
  hideTrigger?: 'custom' | 'mouseenter' | 'mouseleave' | 'click' | 'focus' | 'blur';
  active?: boolean;
  bounce?: boolean;
  disabled?: boolean;
  maxWidth?: string | number;
  minWidth?: string | number;
  onClickOutside?: Function;
  color?: string;
  lineHeight?: string;
  onShow?: Function;
  onHide?: Function;
  zIndex?: number;
  appendToParent?: boolean;
  appendTo?: any;
  moveBy?: Point;
  moveArrowTo?: number;
  size?: 'normal' | 'large';
  shouldCloseOnClickOutside?: boolean;
  relative?: boolean;
  padding?: string | number;
  shouldUpdatePosition?: boolean;
}

const defaultProps = {
  placement: 'top',
  alignment: 'center',
  showTrigger: 'mouseenter',
  hideTrigger: 'mouseleave',
  showDelay: 200,
  hideDelay: 0,
  zIndex: 2000,
  maxWidth: '204px',
  onClickOutside: noop,
  onShow: noop,
  onHide: noop,
  active: false,
  theme: 'light',
  disabled: false,
  children: null,
  size: 'normal',
  shouldCloseOnClickOutside: false,
  textAlign: 'left',
  relative: false,
  shouldUpdatePosition: false
};

export const Tooltip = withStylable<CoreTooltipProps, TooltipProps>(
  CoreTooltip,
  style,
  ({placement, alignment, theme, showTrigger, hideTrigger, active,
    bounce, disabled, appendToParent, size, relative, shouldUpdatePosition}) => ({
      [placement]: true, [alignment]: true, [theme]: true, [showTrigger]: true, [hideTrigger]: true,
      active, bounce, disabled, appendToParent, [size]: true, relative, shouldUpdatePosition
    }),
  defaultProps
);
