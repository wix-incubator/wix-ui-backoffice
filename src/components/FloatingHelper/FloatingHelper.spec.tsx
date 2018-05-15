import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { reactEventTrigger } from 'wix-ui-test-utils/react-helpers';
import { floatingHelperTestkitFactory } from '../../testkit';
import { floatingHelperTestkitFactory as enzymeFloatingHelperTestkitFactory } from '../../testkit/enzyme';
import { floatingHelperDriverFactory, FloatingHelperDriver } from './FloatingHelper.driver';
import { FloatingHelper, FloatingHelperProps } from './FloatingHelper';
import { HelperContent, HelperContentProps } from '../../components/FloatingHelper/HelperContent';
import defaults = require('lodash/defaults');
import { ClosablePopover } from './ClosablePopover';
import { runTestkitExistsSuite } from '../../common/testkitTests';

describe('FloatingHelper', () => {

  const buildComponent = (props?: Partial<FloatingHelperProps>) => {
    const defaultProps: FloatingHelperProps = {
      placement: 'right',
      content: <HelperContent title="my title" body="this is the body"/>,
      children: <div>This is the target element</div>
    };
    
    return <FloatingHelper {...defaults({}, props, defaultProps)} />;
  };
  
  let wrapper: ReactWrapper;

  const createEnzymeDriver = element=> {
    wrapper = mount(element);
    return floatingHelperDriverFactory({wrapper, element:undefined, eventTrigger: reactEventTrigger()})
  };

  afterEach(() => {
    wrapper.unmount();  
  });

  // Skipped: need to add hasArrow() method to Popover driver.
  xit('should have arrow by default', () => {
    const driver = createEnzymeDriver(buildComponent());
    // expect(driver.hasArrow()).toBe(true);
  });

  it('should have helper content (with title)', () => {
    const driver = createEnzymeDriver(buildComponent());
    expect(driver.getHelperContentDriver().exists()).toBeTruthy();
    expect(driver.getHelperContentDriver().getTitleContent()).toBe('my title');
  });

  describe('width', () => {
    it('should have default width of 444', () => {
      const driver = createEnzymeDriver(buildComponent());
      expect(driver.getWidth()).toBe('444px');
    });

    it('should have a custom width (which is a string)', () => {
      const width = '500px';
      const driver = createEnzymeDriver(buildComponent({ width }));
      expect(driver.getWidth()).toBe(width);
    });

    it('should have a custom width (which is a number)', () => {
      const width = 600;
      const driver = createEnzymeDriver(buildComponent({ width }));
      expect(driver.getWidth()).toBe(`${width}px`);
    });
  });

  describe('close-button', () => {
    it('should have a close-button by default', () => {
      const driver = createEnzymeDriver(buildComponent());
      expect(driver.hasCloseButton()).toBeTruthy();
    });

    it('should NOT have a close-button', () => {
      const driver = createEnzymeDriver(buildComponent({ showCloseButton: false }));
      expect(driver.hasCloseButton()).toBeFalsy();
    });
  });

  describe('close', () => {
    it('should be opened by default', () => {
      const driver = createEnzymeDriver(buildComponent());
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should close popover when close-button is clicked', () => {
      const driver = createEnzymeDriver(buildComponent());
      driver.clickCloseButton();
      expect(driver.isOpened()).toBeFalsy();
    });
  });

  describe('appendTo', () => {
    it('should be window by default', () => {
      wrapper = mount(buildComponent());
      expect(wrapper.find(ClosablePopover).instance().props.appendTo).toBe('window');
    });
  });

  runTestkitExistsSuite({
    Element: buildComponent(),
    testkitFactory: floatingHelperTestkitFactory,
    enzymeTestkitFactory: enzymeFloatingHelperTestkitFactory
  });
});
