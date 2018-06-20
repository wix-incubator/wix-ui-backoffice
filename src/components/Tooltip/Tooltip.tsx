import * as React from 'react';
import {Tooltip as CoreTooltip, TooltipProps as CoreTooltipProps} from 'wix-ui-core/Tooltip';
import style from './Tooltip.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import {TextAlignProperty} from 'csstype';

const noop = () => null;

export interface TooltipProps {
  className?: string;
  textAlign?: TextAlignProperty;
  theme?: 'light' | 'dark' | 'error';
  bounce?: boolean;
  disabled?: boolean;
  maxWidth?: string | number;
  minWidth?: string | number;
  onClickOutside?: Function;
  color?: string;
  lineHeight?: string;
  zIndex?: number;
  size?: 'normal' | 'large';
  shouldCloseOnClickOutside?: boolean;
  relative?: boolean;
  padding?: string | number;
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
  bounce: false
};

const TooltipBO = withStylable<CoreTooltipProps, TooltipProps>(
  CoreTooltip,
  style,
  ({placement, alignment, theme, showTrigger, hideTrigger, active,
    bounce, disabled, appendToParent, size, relative, shouldUpdatePosition}) => ({
      [`placement-${placement}`]: true, [alignment]: true, [theme]: true, [showTrigger]: true, [hideTrigger]: true,
      active, bounce, disabled, appendToParent, [size]: true, relative, shouldUpdatePosition
    }),
  defaultProps
);

export const Tooltip: React.SFC<CoreTooltipProps & TooltipProps> = props => {
  const {minWidth, textAlign, maxWidth, color, lineHeight, zIndex, padding, content, ...rest} = props;
  const wrappedContent = <div className={style.tooltipContent} style={{minWidth, textAlign, maxWidth, color, lineHeight, zIndex, padding}}>{content}</div>;
  return <TooltipBO {...rest} content={wrappedContent} />;
};

Tooltip.displayName = 'Tooltip';
