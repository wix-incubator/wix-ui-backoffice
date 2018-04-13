import {$, ElementFinder, by} from 'protractor';
import {popoverDriverFactory, PopoverDriver} from 'wix-ui-core/dist/src/baseComponents/Popover/Popover.protractor.driver';
import {DataHooks} from './DataHooks';
import {helperContentDriverFactory} from './content/HelperContent.protractor.driver';
import {dataHookLocator} from '../../../test/utils/protractor';

export interface GlobalHelperDriver extends PopoverDriver {
}

export const globalHelperDriverFactory = (element: ElementFinder) => {
  return {
    ...popoverDriverFactory(element),
    getHelperContentDriver: () =>  helperContentDriverFactory(element.$(dataHookLocator(DataHooks.innerContent))),
  };
};
