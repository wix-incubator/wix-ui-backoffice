/* global describe it expect */

import * as React from 'react';

import {timePickerDriverFactory} from './TimePicker.driver';
import {TimePicker} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
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
    // TODO: skipping for now, because it requires update in wix-ui-core TimePicker to support width prop too
    it.skip('should not pass inline styles prop', () => {
      const driver = createDriver(<TimePicker width="432px"/>);
      expect(driver.getInputElement().style.width).toEqual('432px');
    });
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
