import { ElementFinder } from 'protractor';
import { popoverDriverFactory, PopoverDriver } from 'wix-ui-core/drivers/protractor';
import { DriverFactory, BaseDriver } from 'wix-ui-core/dist/standalone/src/common/BaseDriver.protractor';

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
