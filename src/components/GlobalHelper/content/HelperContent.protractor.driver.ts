import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {dataHookLocator} from '../../../../test/utils/protractor';
import {textDriverFactory} from '../../Text/Text.protractor.driver';

export const helperContentDriverFactory = (element: ElementFinder) => {
  const title = () => element.$(dataHookLocator(DataHooks.title));
  const text = () => element.$(dataHookLocator(DataHooks.text));
  return {
    hasTitle: async () => title().isPresent(),
    getTitleContent: async () => textDriverFactory(title()).getText(),
    getTextContent: async () => textDriverFactory(text()).getText()
  };
};
