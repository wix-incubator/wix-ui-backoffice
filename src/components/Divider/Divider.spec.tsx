import * as React from 'react';
import {dividerDriverFactory} from './Divider.driver';
import {Divider} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('Divider', () => {
  const createDriver = createDriverFactory(dividerDriverFactory);

  it('should render divider', () => {
    let wrapper = createDriver(<Divider/>);
    expect(wrapper.exists()).toBeTruthy();
  });
});
