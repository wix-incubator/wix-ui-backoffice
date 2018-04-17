import {DataHooks} from './DataHooks';
import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';

export interface HelperContentDriver extends BaseDriver {
  /** checks if the element exists */
  exists: () => boolean;
  /** checks if title exists */
  hasTitle: () => boolean;
  /** checks if text content exists */
  hasText: () => boolean;
  /** Get the text content of the title */
  getTitleContent: () => string;
  /** Get the text content of the helper's text */
  getTextContent: () => string;
}

export const helperContentDriverFactory: DriverFactory<HelperContentDriver> = ({element}) => {
  const title = () => element.querySelector(`[data-hook='${DataHooks.title}']`);
  const text = () => element.querySelector(`[data-hook='${DataHooks.text}']`);

  return {
    /** checks if the element exists */
    exists: () => !!element,
    /** checks if title exists */
    hasTitle: () => !!title(),
    /** checks if text content exists */
    hasText: () => !!text(),
    /** Get the text content of the title */
    getTitleContent: () => title().textContent,
    /** Get the text content of the helper's text */
    getTextContent: () => text().textContent,
  };
};
