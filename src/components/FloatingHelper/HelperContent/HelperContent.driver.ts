import { DataHooks } from './DataHooks';
import { BaseDriver, DriverFactory } from 'wix-ui-test-utils/driver-factory';
import { buttonDriverFactory, ButtonDriver } from '../../Button/Button.driver';
import { Skin } from '../../Button/constants';

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
  /** Get the action button test driver */
  getActionButtonDriver: () => ButtonDriver;
}

export const helperContentDriverFactory: DriverFactory<
  HelperContentDriver
> = factoryParams => {
  const { element } = factoryParams;
  const title = () => element.querySelector(`[data-hook='${DataHooks.title}']`);
  const body = () => element.querySelector(`[data-hook='${DataHooks.body}']`);
  const actionButton = () =>
    element.querySelector(`[data-hook='${DataHooks.actionButton}']`);

  return {
    exists: () => !!element,
    hasTitle: () => !!title(),
    hasBody: () => !!body(),
    hasActionButton: () => !!actionButton(),
    getActionButtonDriver: () => buttonDriverFactory({
      ...factoryParams,
      element: actionButton()
    }),
    getTitleContent: () => title().textContent,
    getBodyContent: () => body().textContent,
  };
};
