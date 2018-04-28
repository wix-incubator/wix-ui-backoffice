import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';
import {popoverDriverFactory} from 'wix-ui-core/dist/src/components/Popover/Popover.driver';
import {DataHooks} from './DataHooks';
import {helperContentDriverFactory, HelperContentDriver} from '../../components/FloatingHelper/HelperContent/HelperContent.driver';
import {EnzymeDriverFactory} from 'wix-ui-test-utils/enzyme';

// TODO: add interface of PopoverDriver
export interface FloatingHelperDriver extends BaseDriver {
  getHelperContentDriver: () => HelperContentDriver;
}

export const floatingHelperDriverFactory:
  DriverFactory<FloatingHelperDriver> | EnzymeDriverFactory<FloatingHelperDriver> =
  ({wrapper, element, eventTrigger}) => {
  const innerContent = () => element.querySelector(`[data-hook='${DataHooks.innerContent}']`);

  return {
    ...popoverDriverFactory({element, eventTrigger}),
    /** Get HelperContent driver */
    getHelperContentDriver: () => helperContentDriverFactory({wrapper, element: innerContent(), eventTrigger}),
    /** checks if the component exists */
    exists: () => !!element
  };
};
