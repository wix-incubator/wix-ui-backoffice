import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import defaults = require('lodash/defaults');
import * as eventually from 'wix-eventually';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { reactEventTrigger } from 'wix-ui-test-utils/react-helpers';
import { floatingHelperTestkitFactory } from '../../testkit';
import { floatingHelperTestkitFactory as enzymeFloatingHelperTestkitFactory } from '../../testkit/enzyme';
import { floatingHelperDriverFactory, FloatingHelperDriver } from './FloatingHelper.driver';
import { FloatingHelper, FloatingHelperProps } from './FloatingHelper';
import { FloatingHelperContent, FloatingHelperContentProps } from '../../components/FloatingHelper/FloatingHelperContent';
import { ClosablePopover } from './ClosablePopover';
import { runTestkitExistsSuite } from '../../common/testkitTests';
import { createEnzymeDriverFactory } from '../../../test/testkitUtils';

export interface WithDataHook {
  'data-hook'?: string
}

describe('FloatingHelper', () => {

  const buildComponent = (props?: Partial<FloatingHelperProps> & WithDataHook & {ref?: (instance:any)=>any}) => {
    const defaultProps: FloatingHelperProps = {
      placement: 'right',
      content: <FloatingHelperContent title="my title" body="this is the body" />,
      target: <div>This is the target element</div>
    };

    return <FloatingHelper {...defaults({}, props, defaultProps)} />;
  };

  let wrapper: ReactWrapper;

  const createEnzymeDriver = (element: React.ReactElement<any>) => {
    const floatingHelperEnzymeDriverFactory = createEnzymeDriverFactory<FloatingHelper,FloatingHelperDriver>(floatingHelperDriverFactory);
    const {driver, wrapper : wrapperTemp, wrapperInstance}=floatingHelperEnzymeDriverFactory(element);
    wrapper = wrapperTemp;
    return {driver,wrapperInstance};
  }

  const waitForClose = (driver: FloatingHelperDriver) => eventually(() => expect(driver.isOpened()).toBeFalsy());

  afterEach(() => {
    wrapper.unmount();
  });

  // Skipped: need to add hasArrow() method to Popover driver.
  xit('should have arrow by default', () => {
    const driver = createEnzymeDriver(buildComponent());
    // expect(driver.hasArrow()).toBe(true);
  });

  it('should have helper content (with title)', () => {
    const { driver } = createEnzymeDriver(buildComponent());
    expect(driver.getHelperContentDriver().exists()).toBeTruthy();
    expect(driver.getHelperContentDriver().getTitleContent()).toBe('my title');
  });

  describe('width', () => {
    it('should have default width of 444', () => {
      const { driver } = createEnzymeDriver(buildComponent());
      expect(driver.getWidth()).toBe('444px');
    });

    it('should have a custom width (which is a string)', () => {
      const width = '500px';
      const { driver } = createEnzymeDriver(buildComponent({ width }));
      expect(driver.getWidth()).toBe(width);
    });

    it('should have a custom width (which is a number)', () => {
      const width = 600;
      const { driver } = createEnzymeDriver(buildComponent({ width }));
      expect(driver.getWidth()).toBe(`${width}px`);
    });
  });

  describe('close-button', () => {
    it('should have a close-button by default', () => {
      const { driver } = createEnzymeDriver(buildComponent());
      expect(driver.hasCloseButton()).toBeTruthy();
    });
  });

  describe('close', () => {
    it('should be opened by default', () => {
      const { driver } = createEnzymeDriver(buildComponent());
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should close popover when close-button is clicked', async () => {
      const { driver } = createEnzymeDriver(buildComponent());
      driver.clickCloseButton();
      await waitForClose(driver);
    });
  });

  describe('programatic open/close sanity', () => {
    it('should open and close programatically', async () => {
      const {driver, wrapperInstance} = createEnzymeDriver(buildComponent({initiallyOpened:false}));

      expect(driver.isOpened()).toBeFalsy();
      wrapperInstance.open();
      expect(driver.isOpened()).toBeTruthy();
      wrapperInstance.close();
      await waitForClose(driver);
      expect(driver.isOpened()).toBeFalsy();
    });
  });

  describe('controlled', () => {
    it('should call onClose but not close', async () => {
      const onClose=jest.fn();
      const {driver, wrapperInstance} = createEnzymeDriver(buildComponent({opened:true, onClose}));
      driver.clickCloseButton();
      expect(onClose).toBeCalled();
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should not throw error when closeButton clicked and there is no onClose callback', async () => {
      const {driver, wrapperInstance} = createEnzymeDriver(buildComponent({opened:true}));
      const click = ()=>driver.clickCloseButton();
      expect(click).not.toThrowError();
    });
  });

  describe('appendTo', () => {
    it('should be window by default', () => {
      wrapper = mount(buildComponent());
      expect(wrapper.find(ClosablePopover).props().appendTo).toBe('window');
    });
  });

  runTestkitExistsSuite({
    Element: buildComponent(),
    testkitFactory: floatingHelperTestkitFactory,
    enzymeTestkitFactory: enzymeFloatingHelperTestkitFactory
  });
});
