import * as React from 'react';
import {dividerDriverFactory} from './Divider.driver';
import {Divider} from './';
import {mount} from 'enzyme';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('Divider', () => {
  const createDriver = createDriverFactory(dividerDriverFactory);

  it('should render divider', () => {
    let wrapper = mount(
      <Divider/>,
      {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('input').length).toBe(1);
  });
});
