import {DataHooks} from './DataHooks';
import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';

export interface HelperContentDriver extends BaseDriver {
  /** checks if the element exists */
  exists: () => boolean;
  /** checks if title exists */
  hasTitle: () => boolean;
  /** checks if text content exists */
  hasBody: () => boolean;
  /** Get the text content of the title */
  getTitleContent: () => string;
  /** Get the text content of the helper's text */
  getBodyContent: () => string;
}

export const helperContentDriverFactory: DriverFactory<HelperContentDriver> = ({element}) => {
  const title = () => element.querySelector(`[data-hook='${DataHooks.title}']`);
  const body = () => element.querySelector(`[data-hook='${DataHooks.body}']`);

  return {
    /** checks if the element exists */
    exists: () => !!element,
    /** checks if title exists */
    hasTitle: () => !!title(),
    /** checks if text content exists */
    hasBody: () => !!body(),
    /** Get the text content of the title */
    getTitleContent: () => title().textContent,
    /** Get the text content of the helper's body */
    getBodyContent: () => body().textContent,
  };
};
