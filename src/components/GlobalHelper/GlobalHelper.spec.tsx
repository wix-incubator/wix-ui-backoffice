import * as React from 'react';
import {globalHelperDriverFactory, GlobalHelperDriver} from './GlobalHelper.driver';
import {GlobalHelper} from '.';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {globalHelperTestkitFactory} from '../../testkit';
import {globalHelperTestkitFactory as enzymeGlobalHelperTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('GlobalHelper', () => {
  const createDriver = createDriverFactory(globalHelperDriverFactory);

  const element = (
    <GlobalHelper
      shown={true}
      placement="right"
      content="Hello"
    >
      <div />
    </GlobalHelper>
  );

  // Skipped: need to add hasArrow() method to Popover driver.
  xit('should have arrow by default', () => {
    const driver = createDriver(element);
    // expect(driver.hasArrow()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(element, globalHelperTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(element, enzymeGlobalHelperTestkitFactory, mount)).toBe(true);
    });
  });
});
