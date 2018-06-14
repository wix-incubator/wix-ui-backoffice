import {ComponentFactory} from 'wix-ui-test-utils/driver-factory';
import {tooltipDriverFactory} from 'wix-ui-core/dist/src/components/Tooltip/Tooltip.driver';
import {linearProgressBarDriverFactory as coreLinearProgressBarDriverFactory} from 'wix-ui-core/dist/src/components/LinearProgressBar/LinearProgressBar.driver';
import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';
export interface LinearProgressBarDriver extends BaseDriver {
    isTooltipShown: () => boolean;
    isErrorIconShown: () => boolean;
    isSuccessIconShown: () => boolean;
    hoverOnTooltip: () => void;
}

export const linearProgressBarDriverFactory: DriverFactory<LinearProgressBarDriver> = ({ element, eventTrigger, wrapper }: ComponentFactory): LinearProgressBarDriver => {
    const tooltipDriver = tooltipDriverFactory({element: element.querySelector(`[data-hook='tooltip']`), wrapper, eventTrigger});
    const coreProgressBarDriver = coreLinearProgressBarDriverFactory({element: element.querySelector(`[data-hook='progress-bar']`), wrapper, eventTrigger});
    const errorIcon = () => element.querySelector(`[data-hook='error-icon']`);
    const successIcon = () => element.querySelector(`[data-hook='success-icon']`);

    return {
        exists: ()=> coreProgressBarDriver.exists(),
        isTooltipShown: () => tooltipDriver.isContentElementExists(),
        hoverOnTooltip: () => tooltipDriver.mouseEnter(),
        isErrorIconShown: () => !!errorIcon(),
        isSuccessIconShown: () => !!successIcon()
    };
}