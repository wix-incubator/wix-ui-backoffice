import {ComponentFactory} from 'wix-ui-test-utils/driver-factory';
import {
  circularProgressBarDriverFactory as coreCircularProgressBarDriverFactory,
  CircularProgressBarDriver as CoreCircularProgressBarDriver } from 'wix-ui-core/dist/src/components/CircularProgressBar/CircularProgressBar.driver';
import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';
import {tooltipDriverFactory} from '../Tooltip/Tooltip.driver'
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './CircularProgressBar.st.css';

export interface CircularProgressBarDriver extends CoreCircularProgressBarDriver {
    /* Returns true if the tooltip is shown */
    isTooltipShown: () => boolean;
    /* Returns true if the error icon is shown */
    isErrorIconShown: () => boolean;
    /* Returns true if the success icon is shown */
    isSuccessIconShown: () => boolean;
    /* Returns the tooltip driver */
    getTooltip: () => any;
    /* Returns bars size */
    getSize: () => any;

}

export const circularProgressBarDriverFactory: DriverFactory<CircularProgressBarDriver> = ({ element, eventTrigger, wrapper }: ComponentFactory): CircularProgressBarDriver => {
    const tooltipDriver = tooltipDriverFactory({element: element.querySelector(`[data-hook='tooltip']`), wrapper, eventTrigger});
    const coreProgressBarDriver = coreCircularProgressBarDriverFactory({element, wrapper, eventTrigger});
    const errorIcon = () => element.querySelector(`[data-hook='error-icon']`);
    const successIcon = () => element.querySelector(`[data-hook='success-icon']`);
    const stylableDOMUtil = new StylableDOMUtil(style, element);

    return {
        ...coreProgressBarDriver,
        isTooltipShown: () => tooltipDriver.isContentElementExists(),
        getTooltip: () => tooltipDriver, 
        isErrorIconShown: () => !!errorIcon(),
        isSuccessIconShown: () => !!successIcon(),
        getSize: () => stylableDOMUtil.getStyleState(element, 'size'),
    };
}