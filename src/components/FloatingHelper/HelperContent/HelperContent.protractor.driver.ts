import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {DriverFactory, BaseDriver} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import {textDriverFactory} from '../../../components/Text/Text.protractor.driver';

export interface HelperContentDriver extends BaseDriver {
  hasTitle: () => Promise<boolean>;
  hasBody: () => Promise<boolean>;
  hasActionButton: () => Promise<boolean>;
}

export const helperContentDriverFactory: DriverFactory<HelperContentDriver> = element => {
  const title = () => element.$(byDataHook(DataHooks.title));
  const body = () => element.$(byDataHook(DataHooks.body));
  const actionButton = () => element.$(byDataHook(DataHooks.actionButton));

  return {
    element: () => element,
    hasTitle: async () => title().isPresent(),
    hasBody: async () => body().isPresent(),
    hasActionButton: async () => actionButton().isPresent(),
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
