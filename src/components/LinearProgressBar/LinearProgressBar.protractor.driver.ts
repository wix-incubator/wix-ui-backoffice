import {promise, browser, $, ElementFinder} from 'protractor';
import {DriverFactory} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import {linearProgressBarDriverFactory as coreLinearProgressBarDriverFactory, LinearProgressBarDriver as CoreLinearProgressBarDriver} from 'wix-ui-core/dist/src/components/LinearProgressBar/LinearProgressBar.protractor.driver';

export interface LinearProgressBarDriver extends CoreLinearProgressBarDriver {
  /** Hovers over the error icon to display the tooltip with the error message */
  showError: () => promise.Promise<void>;
}

export const linearProgressBarDriverFactory: DriverFactory<LinearProgressBarDriver> = (element: ElementFinder): LinearProgressBarDriver => {
  const errorIcon = () => element.$(`[data-hook='error-icon']`);
  return {
    ...coreLinearProgressBarDriverFactory(element),
    showError: () => browser.actions().mouseMove(errorIcon()).perform()
  };
};
