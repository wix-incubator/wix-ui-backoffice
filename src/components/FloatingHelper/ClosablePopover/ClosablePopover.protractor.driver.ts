import { ElementFinder } from 'protractor';
import { popoverDriverFactory, PopoverDriver } from 'wix-ui-core/dist/src/components/Popover/Popover.protractor.driver';
import { DriverFactory, BaseDriver } from 'wix-ui-core/dist/src/common/BaseDriver.protractor';

export interface ClosablePopoverDriver extends PopoverDriver {
  isOpened: () => Promise<boolean>;
}

export const closablePopoverDriverFactory: DriverFactory<ClosablePopoverDriver> = element => {
  const popoverDriver = popoverDriverFactory(element);

  return {
    ...popoverDriver,
    isOpened: async () => popoverDriver.isContentElementExists(),
  };
};
