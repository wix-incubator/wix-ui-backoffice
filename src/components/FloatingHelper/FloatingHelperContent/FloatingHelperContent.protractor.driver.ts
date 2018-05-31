import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {DriverFactory, BaseDriver} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import {textDriverFactory} from '../../../components/Text/Text.protractor.driver';

export interface FloatingHelperContentDriver extends BaseDriver {
  hasActionButton: () => Promise<boolean>;
}

export const floatingHelperContentDriverFactory: DriverFactory<FloatingHelperContentDriver> = element => {
  const actionButton = () => element.$(byDataHook(DataHooks.actionButton));

  return {
    element: () => element,
    hasActionButton: async () => actionButton().isPresent(),
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
