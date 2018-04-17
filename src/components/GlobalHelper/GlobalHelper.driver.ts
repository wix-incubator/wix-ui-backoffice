import {BaseDriver, DriverFactory} from 'wix-ui-test-utils/driver-factory';
import {DataHooks} from './DataHooks';
import {helperContentDriverFactory, HelperContentDriver} from './content/HelperContent.driver';
import {EnzymeDriverFactory} from 'wix-ui-test-utils/enzyme';

export interface GlobalHelperDriver extends BaseDriver {
  getHelperContentDriver: () => HelperContentDriver;
}

export const globalHelperDriverFactory: DriverFactory<GlobalHelperDriver> | EnzymeDriverFactory<GlobalHelperDriver> = ({wrapper, element, eventTrigger}) => {
  const innerContent = () => element.querySelector(`[data-hook='${DataHooks.innerContent}']`);

  return {
    /** Get HelperContent driver */
    getHelperContentDriver: () => helperContentDriverFactory({wrapper, element: innerContent(), eventTrigger}),
    /** checks if the component exists */
    exists: () => !!element
  };
};
