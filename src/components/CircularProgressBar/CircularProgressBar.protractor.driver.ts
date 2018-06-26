import {$, ElementFinder} from 'protractor';
import {DriverFactory} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';
import {circularProgressBarDriverFactory as coreCircularProgressBarDriverFactory, CircularProgressBarDriver as CoreCircularProgressBarDriver} from 'wix-ui-core/dist/src/components/CircularProgressBar/CircularProgressBar.protractor.driver';

export interface CircularProgressBarDriver extends CoreCircularProgressBarDriver {
  /** Get tooltip that appears on error icons */
  getTooltip?: () => ElementFinder;
}

export const circularProgressBarDriverFactory: DriverFactory<CircularProgressBarDriver> = (element: ElementFinder): CircularProgressBarDriver => {
  return {
    ...coreCircularProgressBarDriverFactory($(`[data-hook='circular-progress-bar']`)),
    getTooltip: () => $(`[data-hook='circular-progressbar-tooltip']`),
  };
};
