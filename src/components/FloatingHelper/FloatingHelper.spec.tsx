import * as React from 'react';
import {floatingHelperDriverFactory, FloatingHelperDriver} from './FloatingHelper.driver';
import {FloatingHelper} from './FloatingHelper';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {floatingHelperTestkitFactory} from '../../testkit';
import {floatingHelperTestkitFactory as enzymeFloatingHelperTestkitFactory} from 'src/testkit/enzyme';
import {mount} from 'enzyme';

describe('FloatingHelper', () => {
  const createDriver = createDriverFactory(floatingHelperDriverFactory);

  const element = (
    <FloatingHelper
      shown={true}
      placement="right"
      content="Hello"
    >
      <div />
    </FloatingHelper>
  );

  // Skipped: need to add hasArrow() method to Popover driver.
  xit('should have arrow by default', () => {
    const driver = createDriver(element);
    // expect(driver.hasArrow()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(element, floatingHelperTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(element, enzymeFloatingHelperTestkitFactory, mount)).toBe(true);
    });
  });
});
