/* global describe it expect */

import * as React from 'react';

import {timePickerDriverFactory} from './TimePicker.driver';
import {TimePicker} from './TimePicker';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {ReactDOMTestContainer} from 'wix-ui-core/dist/test/dom-test-container';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';
import {timePickerTestkitFactory} from '../../testkit';
import {timePickerTestkitFactory as enzymeTimePickerTestkitFactory} from '../../testkit/enzyme';

describe('TimePicker', () => {
  const createDriver = createDriverFactory(timePickerDriverFactory);

  describe('time display', () => {
    it('should render given value', () => {
      const driver = createDriver(<TimePicker value="12:34"/>);
      expect(driver.getValue()).toBe('12:34');
    });

    it('should render --:-- when no value given', () => {
      const driver = createDriver(<TimePicker/>);
      expect(driver.getValue()).toBe('--:--');
    });

    it('should allow rendering time in 24 hours mode', () => {
      const props = {
        value: '23:59',
        disableAmPm: true
      };
      const driver = createDriver(<TimePicker {...props}/>);
      expect(driver.getValue()).toBe(props.value);
    });

    it('should display am/pm indicator when in 12 hours mode', () => {
      const props = {
        value: '15:04',
        disableAmPm: false
      };
      const driver = createDriver(<TimePicker {...props}/>);
      expect(driver.isAmPmIndicatorExist()).toBeTruthy();
      expect(driver.getValue()).toBe('03:04');
    });

    it('should display AM indicator when in 12 hours mode and the time displayed is AM', () => {
      const props = {
        value: '11:59',
        disableAmPm: false
      };
      const driver = createDriver(<TimePicker {...props}/>);
      expect(driver.getAmPmIndicatorText()).toBe('am');
    });

    it('should display AM indicator when in 12 hours mode and the time displayed is PM', () => {
      const props = {
        value: '19:27',
        disableAmPm: false
      };
      const driver = createDriver(<TimePicker {...props}/>);
      expect(driver.getAmPmIndicatorText()).toBe('pm');
    });
  });

  describe('`width` prop', () => {
    it('should not pass inline styles prop', () => {
      const driver = createDriver(<TimePicker width="432px"/>);
      expect(driver.getInlineStyle().width).toEqual('432px');
    });
  });

  describe('`style` prop', () => {
    it('should pass through the style prop', () => {
      const driver = createDriver(<TimePicker style={{width: 543}}/>);
      expect(driver.getInlineStyle().width).toEqual('543px');
    });

    it('should not override the width prop (if passed)', () => {
      const driver = createDriver(<TimePicker style={{width: 543}} width="111px" />);
      expect(driver.getInlineStyle().width).toEqual('111px');
    });
  });

  it('should support focus() and blur() methods', async () => {
    const container = new ReactDOMTestContainer().unmountAfterEachTest();
    container.create();
    const reactInstance = await container.renderWithRef(<TimePicker/>);
    const inputElement = container.componentNode.querySelector('input');

    expect(document.activeElement).not.toBe(inputElement);
    reactInstance.focus();
    expect(document.activeElement).toBe(inputElement);
    reactInstance.blur();
    expect(document.activeElement).not.toBe(inputElement);
  });

  describe('testkits', () => {
    it('should exist', () => {
      expect(isTestkitExists(<TimePicker/>, timePickerTestkitFactory)).toBe(true);
    });

    it('should exist for enzyme', () => {
      expect(isEnzymeTestkitExists(<TimePicker/>, enzymeTimePickerTestkitFactory, mount)).toBe(true);
    });
  });
});
