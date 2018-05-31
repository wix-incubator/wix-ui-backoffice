import {ElementFinder} from 'protractor';

export interface TextDriver {
  element: () => ElementFinder;
  getText: () => Promise<string>;
}

export const textDriverFactory = component => ({
  /** returns the component element */
  element: () => component,
  /** returns the component text */
  getText: async () => component.getText()
});
