import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';
import {closablePopoverDriverFactory,ClosablePopoverDriver} from './ClosablePopover/ClosablePopover.driver';
import {DataHooks} from './DataHooks';
import {floatingHelperContentDriverFactory, FloatingHelperContentDriver} from '../../components/FloatingHelper/FloatingHelperContent/FloatingHelperContent.driver';

// TODO: add interface of PopoverDriver
export interface FloatingHelperDriver extends ClosablePopoverDriver {
  /** Get the driver for the helper's content */
  getHelperContentDriver: () => FloatingHelperContentDriver;
  /** check wether the helper has a close button */
  hasCloseButton: () => boolean;
  /** click the close button */
  clickCloseButton: () => void;
  /** Get width of content's root element */
  getWidth: () => string;
}

export const floatingHelperDriverFactory:
  DriverFactory<FloatingHelperDriver>  =
  ({wrapper, element, eventTrigger}) => {
  const closablePopoverDriver = closablePopoverDriverFactory({wrapper, element, eventTrigger});
  const popoverContent = () => closablePopoverDriver.getContentElement();
  const innerContent = () => popoverContent().querySelector(`[data-hook='${DataHooks.innerContent}']`);
  const closeButton = () => popoverContent().querySelector(`[data-hook='${DataHooks.closeButton}']`);
  const contentWrapper = () => popoverContent().querySelector(`[data-hook='${DataHooks.contentWrapper}']`);
  

  return {
    ...closablePopoverDriver,
    hasCloseButton: () => !!closeButton(),
    clickCloseButton: () => eventTrigger.click(closeButton()),
    getHelperContentDriver: () => floatingHelperContentDriverFactory({wrapper, element: innerContent(), eventTrigger}),
    getWidth: () => window.getComputedStyle(contentWrapper()).width
  };
};
