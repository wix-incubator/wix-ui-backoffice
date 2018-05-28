import { $, ElementFinder, by } from 'protractor';
import { DriverFactory } from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import { ClosablePopover } from './ClosablePopover/ClosablePopover';
import { FloatingHelperDriver } from './FloatingHelper.protractor.driver';
import { closablePopoverDriverFactory, ClosablePopoverDriver } from './ClosablePopover/ClosablePopover.protractor.driver';
import { DataHooks } from './DataHooks';
import { helperContentDriverFactory, HelperContentDriver } from '../../components/FloatingHelper/HelperContent/HelperContent.protractor.driver';

export interface FloatingHelperDriver extends ClosablePopoverDriver {
  /** Get HelperContent driver */
  getHelperContentDriver: () => HelperContentDriver;
}

export const floatingHelperDriverFactory: DriverFactory<FloatingHelperDriver> = (element: ElementFinder): FloatingHelperDriver => {
  return {
    ...closablePopoverDriverFactory(element),
    getHelperContentDriver: () => helperContentDriverFactory(element.$(byDataHook(DataHooks.innerContent))),
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
