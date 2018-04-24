import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {DriverFactory, BaseDriver} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import {textDriverFactory} from '../../../components/Text/Text.protractor.driver';

export interface HelperContentDriver extends BaseDriver {
  hasTitle: () => Promise<boolean>;
  getTitleContent: () => Promise<string>;
  getBodyContent: () => Promise<string>;
}

export const helperContentDriverFactory: DriverFactory<HelperContentDriver> = element => {
  const title = () => element.$(byDataHook(DataHooks.title));
  const body = () => element.$(byDataHook(DataHooks.body));

  return {
    element: () => element,
    hasTitle: async () => title().isPresent(),
    getTitleContent: async () => textDriverFactory(title()).getText(),
    getBodyContent: async () => textDriverFactory(body()).getText()
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
