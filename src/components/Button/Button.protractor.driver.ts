import { ElementFinder } from 'protractor';
import { DriverFactory } from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import {buttonDriverFactory as coreButtonDriverFactory, ButtonDriver as CoreButtonDriver} from 'wix-ui-core/dist/src/components/Button/Button.protractor.driver';
import {mouseEnter, mouseLeave} from 'wix-ui-test-utils/protractor';

export interface ButtonDriver extends CoreButtonDriver {
  mouseEnter: () => Promise<void>;
  mouseLeave: () => Promise<void>;
}

export const buttonDriverFactory: DriverFactory<ButtonDriver> = (element: ElementFinder): ButtonDriver => {
  return {
    ...coreButtonDriverFactory(element),
    mouseEnter: async () => mouseEnter(element),
    mouseLeave
  };
};