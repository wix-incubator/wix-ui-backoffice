import { BaseDriver, DriverFactory } from 'wix-ui-test-utils/driver-factory';
import { popoverDriverFactory } from 'wix-ui-core/dist/src/components/Popover/Popover.driver';

// TODO: add interface of PopoverDriver (not defined yet in the core)
export interface ClosablePopoverDriver extends BaseDriver {
  /** Checks is the popover's content is open */
  isOpened: () => boolean;
}

export const closablePopoverDriverFactory: DriverFactory<ClosablePopoverDriver> = ({ element, eventTrigger }) => {
  const popoverDriver = popoverDriverFactory({ element, eventTrigger });

  return {
    ...popoverDriver,
    isOpened: () => popoverDriver.isContentElementExists()
  };
};
