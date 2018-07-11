import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';

export interface FullTextViewDriver extends BaseDriver {
  getText: () => string;
  getTagName: () => string;
}

export const fullTextViewDriverFactory: DriverFactory<FullTextViewDriver> = ({element}) => {
  return {
    /** check if element exists */
    exists: () => !!element,
    /** get the rendered content */
    getText: () => element.innerHTML,
    /** get the rendered tag name */
    getTagName: () => element.tagName.toLowerCase(),
  };
};
