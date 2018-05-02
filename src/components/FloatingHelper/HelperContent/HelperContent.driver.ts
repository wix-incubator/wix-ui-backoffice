import {DataHooks} from './DataHooks';
import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';

export interface HelperContentDriver extends BaseDriver {
  /** checks if the element exists */
  exists: () => boolean;
  /** checks if title exists */
  hasTitle: () => boolean;
  /** checks if text content exists */
  hasBody: () => boolean;
  /** checks if the action button exists */
  hasActionButton: () => boolean;
  /** Get the text content of the title */
  getTitleContent: () => string;
  /** Get the text content of the helper's text */
  getBodyContent: () => string;
  /** Get the text content of the action button */
  getActionButtonContent: () => string;
}

export const helperContentDriverFactory: DriverFactory<HelperContentDriver> = ({element}) => {
  const title = () => element.querySelector(`[data-hook='${DataHooks.title}']`);
  const body = () => element.querySelector(`[data-hook='${DataHooks.body}']`);
  const actionButton = () => element.querySelector(`[data-hook='${DataHooks.actionButton}']`);

  return {
    exists: () => !!element,
    hasTitle: () => !!title(),
    hasBody: () => !!body(),
    hasActionButton: () => !!actionButton(),
    getTitleContent: () => title().textContent,
    getBodyContent: () => body().textContent,
    getActionButtonContent: () => actionButton().textContent,
  };
};
