import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';
import {closablePopoverDriverFactory,ClosablePopoverDriver} from './ClosablePopover/ClosablePopover.driver';
import {DataHooks} from './DataHooks';
import {helperContentDriverFactory, HelperContentDriver} from '../../components/FloatingHelper/HelperContent/HelperContent.driver';

// TODO: add interface of PopoverDriver
export interface FloatingHelperDriver extends ClosablePopoverDriver {
  /** Get the driver for the helper's content */
  getHelperContentDriver: () => HelperContentDriver;
  /** check wether the helper has a close button */
  hasCloseButton: () => boolean;
  /** click the close button */
  clickCloseButton: () => void;
  /** check wether the helper content is shown */
  isOpened: () => boolean;
  /** Get width of content's root element */
  getWidth: () => string;
}

export const floatingHelperDriverFactory:
  DriverFactory<FloatingHelperDriver>  =
  ({wrapper, element, eventTrigger}) => {
  const innerContent = () => element.querySelector(`[data-hook='${DataHooks.innerContent}']`);
  const closeButton = () => element.querySelector(`[data-hook='${DataHooks.closeButton}']`);
  const contentWrapper = () => element.querySelector(`[data-hook='${DataHooks.contentWrapper}']`);
  const closablePopoverDriver = closablePopoverDriverFactory({wrapper, element, eventTrigger});

  return {
    ...closablePopoverDriver,
    hasCloseButton: () => !!closeButton(),
    clickCloseButton: () => eventTrigger.click(closeButton()),
    getHelperContentDriver: () => helperContentDriverFactory({wrapper, element: innerContent(), eventTrigger}),
    getWidth: () => window.getComputedStyle(contentWrapper()).width
  };
};
