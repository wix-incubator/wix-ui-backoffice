import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {textDriverFactory} from 'src/components/Text/Text.protractor.driver';
import {DriverFactory, BaseDriver} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';

export interface HelperContentDriver extends BaseDriver {
  hasTitle: () => Promise<boolean>;
  getTitleContent: () => Promise<string>;
  getTextContent: () => Promise<string>;
}

export const helperContentDriverFactory: DriverFactory<HelperContentDriver> = (element: ElementFinder) => {
  const title = () => element.$(byDataHook(DataHooks.title));
  const text = () => element.$(byDataHook(DataHooks.text));

  return {
    element: () => element,
    hasTitle: async () => title().isPresent(),
    getTitleContent: async () => textDriverFactory(title()).getText(),
    getTextContent: async () => textDriverFactory(text()).getText()
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
