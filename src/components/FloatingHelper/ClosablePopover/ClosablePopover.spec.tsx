import * as React from 'react';
import { mount } from 'enzyme';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { isTestkitExists } from 'wix-ui-test-utils/vanilla';
import { isEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { closablePopoverDriverFactory, ClosablePopoverDriver } from './ClosablePopover.driver';
import { ClosablePopover, ClosablePopoverProps } from './ClosablePopover';
import defaults = require('lodash/defaults');

describe('ClosablePopover', () => {
  const createDriver = createDriverFactory(closablePopoverDriverFactory);
  const createComponent = (partialProps?: Partial<ClosablePopoverProps>) => (
    <ClosablePopover
      target={<div>this is the target</div>}
      content={() => <div>this is the popover content</div>}
      placement="right"
      {...partialProps}
    />
  );

  describe('open/close on hover', () => {
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
      expect(driver.isContentElementExists()).toBeFalsy();
    });

    it('should NOT close on mouse leave when initially opened', async () => {
      const driver = createDriver(createComponent());
      driver.mouseEnter();
      driver.mouseLeave();
      expect(driver.isContentElementExists()).toBeTruthy();
    });
  });

  describe('onOpened/onClosed callbacks', () => {
    it('should call onClosed when closed by close-action', () => {
      let triggerClose;
      let onClosed = jest.fn();
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        },
        onClosed
      }));
      triggerClose();
      
      expect(onClosed).toBeCalled();
    });

    it('should call onOpened when hovered by mouse', () => {
      let triggerClose;
      let onOpened = jest.fn();
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        },
        onOpened
      }));

      triggerClose();
      driver.mouseEnter();
      expect(onOpened).toBeCalled();
    });

    it('should call onClosed when mouse leaves after closed by close-action', () => {
      let triggerClose;
      let onClosed = jest.fn();
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        },
        onClosed
      }));
      
      triggerClose();
      driver.mouseEnter();
      driver.mouseLeave();
      expect(onClosed.mock.calls.length).toBe(2);
    });
  });

  describe('close', () => {
    it('should be opened by default', () => {
      const driver = createDriver(createComponent());
      expect(driver.isOpened()).toBeTruthy();
    });

    it('should close when closeAction called', () => {
      let triggerClose;
      const driver = createDriver(createComponent({
        content: ({ close }) => {
          triggerClose = close;
          return <div>the content</div>;
        }
      }));
      expect(driver.isOpened()).toBeTruthy();
      triggerClose();
      expect(driver.isOpened()).toBeFalsy();
    });
  });

});
