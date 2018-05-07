import { FloatingHelperDriver } from './FloatingHelper.protractor.driver';
import { $, ElementFinder, by } from 'protractor';
import { popoverDriverFactory, PopoverDriver } from 'wix-ui-core/dist/src/components/Popover/Popover.protractor.driver';
import { DataHooks } from './DataHooks';
import { helperContentDriverFactory, HelperContentDriver } from '../../components/FloatingHelper/HelperContent/HelperContent.protractor.driver';
import { DriverFactory } from 'wix-ui-core/dist/src/common/BaseDriver.protractor';

export interface FloatingHelperDriver extends PopoverDriver {
  /** Get HelperContent driver */
  getHelperContentDriver: () => HelperContentDriver;
  hasCloseButton: () => Promise<boolean>;
}

export const floatingHelperDriverFactory: DriverFactory<FloatingHelperDriver> = (element: ElementFinder): FloatingHelperDriver => {
  return {
    ...popoverDriverFactory(element),
    getHelperContentDriver: () => helperContentDriverFactory(element.$(byDataHook(DataHooks.innerContent))),
    hasCloseButton: async () => element.$(byDataHook(DataHooks.closeButton)).isPresent()
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
