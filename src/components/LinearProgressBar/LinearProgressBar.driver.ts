import {ComponentFactory} from 'wix-ui-test-utils/driver-factory';
import {tooltipDriverFactory} from 'wix-ui-core/dist/src/components/Tooltip/Tooltip.driver';
import {
  linearProgressBarDriverFactory as coreLinearProgressBarDriverFactory,
  LinearProgressBarDriver as CoreLinearProgressBarDriver } from 'wix-ui-core/dist/src/components/LinearProgressBar/LinearProgressBar.driver';
import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';

export interface LinearProgressBarDriver extends CoreLinearProgressBarDriver {
    /* Returns true if the tooltip is shown */
    isTooltipShown: () => boolean;
    /* Returns true if the error icon is shown */
    isErrorIconShown: () => boolean;
    /* Returns true if the success icon is shown */
    isSuccessIconShown: () => boolean;
    /* Perform hover on tooltip */
    hoverOnTooltip: () => void;
}

export const linearProgressBarDriverFactory: DriverFactory<LinearProgressBarDriver> = ({ element, eventTrigger, wrapper }: ComponentFactory): LinearProgressBarDriver => {
    const tooltipDriver = tooltipDriverFactory({element: element.querySelector(`[data-hook='tooltip']`), wrapper, eventTrigger});
    const coreProgressBarDriver = coreLinearProgressBarDriverFactory({element, wrapper, eventTrigger});
    const errorIcon = () => element.querySelector(`[data-hook='error-icon']`);
    const successIcon = () => element.querySelector(`[data-hook='success-icon']`);

    return {
        ...coreProgressBarDriver,
        isTooltipShown: () => tooltipDriver.isContentElementExists(),
        hoverOnTooltip: () => tooltipDriver.mouseEnter(),
        isErrorIconShown: () => !!errorIcon(),
        isSuccessIconShown: () => !!successIcon()
    };
}