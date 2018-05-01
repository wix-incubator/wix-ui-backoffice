import * as React from 'react';
import pick = require('lodash/pick');
import {bool, string, number, oneOfType} from 'prop-types';
import * as classnames from 'classnames';
import {Popover, PopoverProps} from 'wix-ui-core/Popover';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './FloatingHelper.st.css';
import {DataHooks} from './DataHooks';
import {Button} from '../Button';
import {Close as CloseIcon} from 'wix-ui-icons-common/system';
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

export interface FloatingHelperOwnProps {
  /** Controls wether a close button will appear ot not */
  showCloseButton?: boolean;
  /** Width HTML attribute of the content. If a number is passed then it defaults to px. e.g width={400} => width="400px" */
  width?: string | number;
}

const PickedPopoverPropTypes = pick(Popover.propTypes, 'placement', 'shown', 'moveBy', 'hideDelay', 'showDelay', 'appendTo', 'timeout', 'className');
export type PickedPopoverProps = Pick<PopoverProps,    'placement'| 'shown'| 'moveBy'| 'hideDelay'| 'showDelay'| 'appendTo'| 'timeout' | 'className'>;
export type FloatingHelperProps = PickedPopoverProps & PopoverAdapterProps & FloatingHelperOwnProps;

const FloatingHelperBO = withStylable<PopoverProps, {}>(
  Popover,
  style,
  p => ({})
);

export const FloatingHelper: React.SFC<FloatingHelperProps> = props => {
  const {children, content, width, ...rest} = props;
  const contentWidth = (typeof width) === 'number' ? `${width}px` : width;

  return (
    <FloatingHelperBO
      {...rest}
      showArrow
    >
      <Popover.Element>
          {children}
      </Popover.Element>
      <Popover.Content>
        <div data-hook={DataHooks.contentWrapper} style={{width: contentWidth}}>
          {props.showCloseButton && (
            <Button
              data-hook={DataHooks.closeButton}
              className={classnames(style.closeButton, style.closeButtonWhiteSecondary)}
            >
              <CloseIcon className={style.closeIcon}/>
            </Button>
          )}
          <div data-hook={DataHooks.innerContent} className={style.innerContent}>
            {content}
          </div>
        </div>
      </Popover.Content>
    </FloatingHelperBO>
  );
};

FloatingHelper.defaultProps = {
  showCloseButton: true,
  width: '444px'
};

FloatingHelper.propTypes = {
  ...PickedPopoverPropTypes,
  showCloseButton: bool,
  width: oneOfType([string, number])
};
