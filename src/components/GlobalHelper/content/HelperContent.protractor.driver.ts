import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {textDriverFactory} from '../../Text/Text.protractor.driver';

export const helperContentDriverFactory = (element: ElementFinder) => {
  const title = () => element.$(byDataHook(DataHooks.title));
  const text = () => element.$(byDataHook(DataHooks.text));

  return {
    hasTitle: async () => title().isPresent(),
    getTitleContent: async () => textDriverFactory(title()).getText(),
    getTextContent: async () => textDriverFactory(text()).getText()
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}
