import {ElementFinder} from 'protractor';
import { DriverFactory } from 'wix-ui-core/dist/src/common/BaseDriver.protractor';

export interface FullTextViewDriver {
  element: () => ElementFinder;
  getText: () => Promise<string>;
}

export const fullTextViewDriverFactory: DriverFactory<FullTextViewDriver> = component => ({
  /** returns the component element */
  element: () => component,
  /** returns the component text */
  getText: async () => component.getText()
});
