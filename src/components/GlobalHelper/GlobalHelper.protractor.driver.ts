import {$, ElementFinder, by} from 'protractor';
import {popoverDriverFactory} from 'wix-ui-core/dist/src/baseComponents/Popover/Popover.protractor.driver';
import {DataHooks} from './DataHooks';
import {helperContentDriverFactory} from './content/HelperContent.protractor.driver';

export const globalHelperDriverFactory = (element: ElementFinder) => {
  return {
    ...popoverDriverFactory(element),
    getHelperContentDriver: () =>  helperContentDriverFactory(element.$(byDataHook(DataHooks.innerContent))),
  };
};

export function byDataHook(hook: string) {
  return `[data-hook='${hook}']`;
}

