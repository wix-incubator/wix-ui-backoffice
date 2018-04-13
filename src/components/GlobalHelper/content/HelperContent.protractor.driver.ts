import {ElementFinder} from 'protractor';
import {DataHooks} from './DataHooks';
import {dataHookLocator} from '../../../../test/utils/protractor';
import {textDriverFactory} from '../../Text/Text.protractor.driver';

export const helperContentDriverFactory = (element: ElementFinder) => {
  const title = () => element.$(dataHookLocator(DataHooks.title));
  return {
    hasTitle: async () => title().isPresent(),
    getTitleText: async () => textDriverFactory(title()).getText()
  };
};
