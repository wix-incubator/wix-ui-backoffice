import * as React from 'react';
import {mount} from 'enzyme';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {floatingHelperTestkitFactory} from '../../testkit';
import {floatingHelperTestkitFactory as enzymeFloatingHelperTestkitFactory} from '../../testkit/enzyme';
import {floatingHelperDriverFactory, FloatingHelperDriver} from './FloatingHelper.driver';
import {FloatingHelper, FloatingHelperProps} from './FloatingHelper';
import {HelperContent, HelperContentProps} from '../../components/FloatingHelper/HelperContent';
import defaults = require('lodash/defaults');

describe('FloatingHelper', () => {
  const createDriver = createDriverFactory(floatingHelperDriverFactory);

  const buildComponent = (props?: Partial<FloatingHelperProps>) => {
    const defaultProps: FloatingHelperProps = {
      shown: true,
      placement: "right",
      content: <HelperContent title="my title"/>,
      children: <div>This is the target element</div>
    };

    return <FloatingHelper {...defaults({}, props, defaultProps)}/>;
  };

  // Skipped: need to add hasArrow() method to Popover driver.
  xit('should have arrow by default', () => {
    const driver = createDriver(buildComponent());
    // expect(driver.hasArrow()).toBe(true);
  });

  it('should have helper content (with title)', () => {
    const driver = createDriver(buildComponent());
    expect(driver.getHelperContentDriver().exists()).toBeTruthy();
    expect(driver.getHelperContentDriver().getTitleContent()).toBe('my title');
  });

  describe('close-button', () => {
    it('should have a close-button by default', () => {
      const driver = createDriver(buildComponent());
      expect(driver.hasCloseButton()).toBeTruthy();
    });

    it('should NOT have a close-button', () => {
      const driver = createDriver(buildComponent({withCloseButton: false}));
      expect(driver.hasCloseButton()).toBeFalsy();
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(buildComponent(), floatingHelperTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(buildComponent(), enzymeFloatingHelperTestkitFactory, mount)).toBe(true);
    });
  });
});
