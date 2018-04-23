import * as React from 'react';
import {buttonDriverFactory} from './Button.driver';
import {Button} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {buttonTestkitFactory} from '../../testkit';
import {buttonTestkitFactory as enzymeButtonTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('Button', () => {
  const createDriver = createDriverFactory(buttonDriverFactory);

  it('should not disabled by default', () => {
    const driver = createDriver(<Button/>);
    expect(driver.isDisabled()).toBeFalsy();
  });

});
