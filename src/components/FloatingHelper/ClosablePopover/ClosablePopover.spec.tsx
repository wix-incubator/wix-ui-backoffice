import * as React from 'react';
import { mount } from 'enzyme';
import defaults = require('lodash/defaults');
import * as eventually from 'wix-eventually';
import { createDriverFactory, DriverFactory, BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { enzymeTestkitFactoryCreator } from 'wix-ui-test-utils/enzyme';
import { closablePopoverDriverFactory, ClosablePopoverDriver } from './ClosablePopover.driver';
import { ClosablePopover, ClosablePopoverProps } from './ClosablePopover';
import { createEnzymeDriverFactory } from '../../../../test/testkitUtils';

describe('ClosablePopover', () => {
  const createDriver = createDriverFactory(closablePopoverDriverFactory);
  const createEnzymeDriver = createEnzymeDriverFactory<ClosablePopover, ClosablePopoverDriver>(closablePopoverDriverFactory);
  const waitForClose = async () => new Promise((res, rej) => setTimeout(res, ClosablePopover.defaultProps.timeout * 2)); // * 2 as arbitrary safety 

  const createComponent = (partialProps?: Partial<ClosablePopoverProps> & { 'data-hook'?: string }) => (
    <ClosablePopover
      target={<div>this is the target</div>}
      content={() => <div>this is the popover content</div>}
      placement="right"
      {...partialProps}
    />
  );

  describe('open/close on hover', async () => {
    it('should display content on hover and hide it on leave, after closed', async () => {
      let triggerClose;
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        }
      }));
      triggerClose();

      driver.mouseEnter();
      expect(driver.isContentElementExists()).toBeTruthy();
      driver.mouseLeave();
      await eventually(() => expect(driver.isContentElementExists()).toBeFalsy());
    });

    it('should NOT close on mouse leave when initially opened', async () => {
      const driver = createDriver(createComponent());
      driver.mouseEnter();
      driver.mouseLeave();
      await waitForClose();
      expect(driver.isContentElementExists()).toBeTruthy();
    });

    it('should display content on hover and hide it on leave, when initially closed', async () => {
      const driver = createDriver(createComponent({ initiallyOpened: false }));

      driver.mouseEnter();
      expect(driver.isContentElementExists()).toBeTruthy();
      driver.mouseLeave();
      await eventually(() => expect(driver.isContentElementExists()).toBeFalsy());
    });

    it('should not hide on mouse-leave, given closeOnMouseLeave is false', async () => {
      let triggerClose;
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        },
        initiallyOpened: true, closeOnMouseLeave: false
      }));
      triggerClose();
      await eventually(() => expect(driver.isContentElementExists()).toBeFalsy());
      driver.mouseEnter();
      expect(driver.isContentElementExists()).toBeTruthy();
      driver.mouseLeave();
      await waitForClose();
      expect(driver.isContentElementExists()).toBeTruthy();
    });
  });

  describe('onOpened/onClosed callbacks', () => {
    it('should call onClosed when closed by close-action', () => {
      let triggerClose;
      let onClose = jest.fn();
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        },
        onClose
      }));
      triggerClose();

      expect(onClose).toBeCalled();
    });

    it('should call onOpened when hovered by mouse', () => {
      let triggerClose;
      let onOpen = jest.fn();
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        },
        onOpen
      }));

      triggerClose();
      driver.mouseEnter();
      expect(onOpen).toBeCalled();
    });

    it('should call onClosed when mouse leaves after closed by close-action', () => {
      let triggerClose;
      let onClose = jest.fn();
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        },
        onClose
      }));

      triggerClose();
      driver.mouseEnter();
      driver.mouseLeave();
      expect(onClose.mock.calls.length).toBe(2);
    });
  });

  describe('initiallyOpened', () => {
    it('should be initially opened', () => {
      const driver = createDriver(createComponent({ initiallyOpened: true }));
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should be initially closed', async () => {
      const driver = createDriver(createComponent({ initiallyOpened: false }));
      expect(driver.isOpened()).toBeFalsy();
    });

    it('should NOT close on mouse leave when initially opened', async () => {
      const driver = createDriver(createComponent());
      driver.mouseEnter();
      driver.mouseLeave();
      await waitForClose();
      expect(driver.isContentElementExists()).toBeTruthy();
    });
  });

  describe('close', () => {
    it('should be opened by default', () => {
      const driver = createDriver(createComponent());
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should close when closeAction called', async () => {
      let triggerClose;
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        }
      }));
      expect(driver.isOpened()).toBeTruthy();
      triggerClose();
      await eventually(() => expect(driver.isOpened()).toBeFalsy());
    });
  });

  describe('programatic open', () => {
    it('should be opened by programatic open, when initially closed', () => {
      const { wrapperInstance, driver } = createEnzymeDriver(createComponent({ initiallyOpened: false }));
      expect(driver.isOpened()).toBeFalsy();
      wrapperInstance.open();
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should be closed by programatic close, after initially opened', async () => {
      const { wrapperInstance, driver } = createEnzymeDriver(createComponent({ initiallyOpened: true }));
      expect(driver.isOpened()).toBeTruthy();
      wrapperInstance.close();
      await eventually(() => expect(driver.isOpened()).toBeFalsy());
    });

    it('should NOT close on mouseLeave, after programatic open', async () => {
      const { wrapperInstance, driver } = createEnzymeDriver(createComponent({ initiallyOpened: false }));
      expect(driver.isOpened()).toBeFalsy();
      wrapperInstance.open();
      expect(driver.isOpened()).toBeTruthy();
      driver.mouseEnter();
      driver.mouseLeave();
      await waitForClose();
      expect(driver.isContentElementExists()).toBeTruthy();
    });

    it('should open/close on hover after click to close, after programatic open', async () => {
      let triggerClose;
      const { wrapperInstance, driver } = createEnzymeDriver(
        createComponent({
          initiallyOpened: false,
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          }
        }));

      wrapperInstance.open();
      triggerClose();

      driver.mouseEnter();
      expect(driver.isContentElementExists()).toBeTruthy();

      driver.mouseLeave();
      await waitForClose();
      expect(driver.isContentElementExists()).toBeFalsy();
    });
  });

  describe('controlled', () => {
    it('should be opened', () => {
      const { wrapperInstance, driver } = createEnzymeDriver(createComponent({ opened:true }));
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should be closed', () => {
      const { wrapperInstance, driver } = createEnzymeDriver(createComponent({ opened:false }));
      expect(driver.isOpened()).toBeFalsy();
    });
  });

  describe('Controlled Error', () => {
    it('should throw error on open', () => {
      const { wrapperInstance, driver } = createEnzymeDriver(createComponent({ opened: false }));
      expect(()=>wrapperInstance.open()).toThrow();
    });

    it('should throw error on close', () => {
      const { wrapperInstance, driver } = createEnzymeDriver(createComponent({ opened: true }));
      expect(()=>wrapperInstance.close()).toThrow();
    });
  });
});

