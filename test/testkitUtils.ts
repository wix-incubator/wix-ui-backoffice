import * as React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import { enzymeTestkitFactoryCreator } from 'wix-ui-test-utils/enzyme';
import { BaseDriver, DriverFactory } from 'wix-ui-test-utils/driver-factory';

/* TODO: Add this to wix-ui-test-utils or 
* change wix-ui-test-utils/enzyme's enzymeTestkitFactoryCreator to return the
* wrapper and wrapperInstance as well.
*/
export function createEnzymeDriverFactory<C extends React.Component<any, any>, T extends BaseDriver>(driverFactory: DriverFactory<T>) {
  function createEnzymeDriver(element: React.ReactElement<any>) {
    const dataHook = 'arbitrary-hook';
    const enzymeTestkitFactory = enzymeTestkitFactoryCreator(driverFactory);
    const wrapper = mount(React.cloneElement(element, { 'data-hook': dataHook }));
    const driver = enzymeTestkitFactory({ wrapper, dataHook });
    return { wrapper, driver, wrapperInstance: wrapper.instance() as C };
  }

  return createEnzymeDriver;
}
