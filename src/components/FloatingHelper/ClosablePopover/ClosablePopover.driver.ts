import { BaseDriver, DriverFactory, ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { popoverDriverFactory } from 'wix-ui-core/dist/src/components/Popover/Popover.driver';

// TODO: Move this interface to Core's PopoverDriver (big PR with dependencies)
export interface PopoverDriver extends BaseDriver {
  exists: () => boolean;
  getTargetElement: () => Element;
  getContentElement: () => any;
  isTargetElementExists: () => boolean;
  isContentElementExists: () => boolean;
  mouseEnter: () => any;
  mouseLeave: () => any;
  click: () => any;
  getArrowOffset: () => {
      top: string;
      left: string;
      right: string;
      bottom: string;
  };
  inlineStyles: () => CSSStyleDeclaration;
  getElementId: () => string
}

export interface ClosablePopoverDriver extends PopoverDriver {
  /** Checks is the popover's content is open */
  isOpened: () => boolean;
}

export const closablePopoverDriverFactory: DriverFactory<ClosablePopoverDriver> = ({ element, eventTrigger}: ComponentFactory): ClosablePopoverDriver => {
  const popoverDriver = popoverDriverFactory({ element, eventTrigger });

  return {
    ...popoverDriver,
    isOpened: () => popoverDriver.isContentElementExists()
  };
};
