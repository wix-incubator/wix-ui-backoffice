import { $, ElementFinder, by } from 'protractor';
import { DriverFactory } from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import { ClosablePopover } from './ClosablePopover/ClosablePopover';
import { closablePopoverDriverFactory, ClosablePopoverDriver } from './ClosablePopover/ClosablePopover.protractor.driver';
import { DataHooks } from './DataHooks';
import {  floatingHelperContentDriverFactory, FloatingHelperContentDriver } from '../../components/FloatingHelper/FloatingHelperContent/FloatingHelperContent.protractor.driver';

export interface FloatingHelperDriver extends ClosablePopoverDriver {
  /** Get HelperContent driver */
  getHelperContentDriver: () => FloatingHelperContentDriver;
}

export const floatingHelperDriverFactory: DriverFactory<FloatingHelperDriver> = (element: ElementFinder): FloatingHelperDriver => {
  return {
    ...closablePopoverDriverFactory(element),
    getHelperContentDriver: () => floatingHelperContentDriverFactory(element.$(byDataHook(DataHooks.innerContent))),
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
