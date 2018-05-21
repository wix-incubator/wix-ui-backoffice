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
