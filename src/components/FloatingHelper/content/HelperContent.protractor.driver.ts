import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {textDriverFactory} from '../../Text/Text.protractor.driver';

export const helperContentDriverFactory = (element: ElementFinder) => {
  const title = () => element.$(byDataHook(DataHooks.title));
  const body = () => element.$(byDataHook(DataHooks.body));

  return {
    hasTitle: async () => title().isPresent(),
    getTitleContent: async () => textDriverFactory(title()).getText(),
    getBodyContent: async () => textDriverFactory(body()).getText()
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
