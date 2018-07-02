import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {timePickerDriverFactory} from './TimePicker.driver';
import {TimePicker} from '.';
import {timePickerTestkitFactory} from '../../testkit';
import {timePickerTestkitFactory as enzymeTimePickerTestkitFactory} from '../../testkit/enzyme';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {mount} from 'enzyme';

describe('TimePicker', () => {
  const createDriver = createDriverFactory(timePickerDriverFactory);

  it('should render timePicker', () => {
    const driver = createDriver(<TimePicker/>);
    expect(driver.exists()).toBe(true);
  });

  describe('disableAmPm', () => {
    it('should show AM/PM by defualt', () => {
      const driver = createDriver(<TimePicker value={'10:00'}/>);
      expect(driver.getValue()).toBe('10:00 AM');
    });

    it('should show 24hrs when disableAmPm is set', () => {
      const driver = createDriver(<TimePicker value={'10:00'} disableAmPm/>);
      expect(driver.getValue()).toBe('10:00');
    });
  });

  describe('dashesWhenDisabled', () => {
    it('should show dashes when disabled and dashesWhenDisabled are set', () => {
      const driver = createDriver(<TimePicker value={'10:00'} disabled dashesWhenDisabled />);
      expect(driver.getValue()).toBe('--:-- AM');
    });

    it('should show default value when disabled is true but dashesWhenDisabled is false', () => {
      const driver = createDriver(<TimePicker value={'10:00'} disabled dashesWhenDisabled={false} />);
      expect(driver.getValue()).toBe('10:00 AM');
    });

    it('should show default value when disabled is false but dashesWhenDisabled is true', () => {
      const driver = createDriver(<TimePicker value={'10:00'} disabled={false} dashesWhenDisabled />);
      expect(driver.getValue()).toBe('10:00 AM');
    });

    it('should show default value when both disabled and dashesWhenDisabled are false', () => {
      const driver = createDriver(<TimePicker value={'10:00'} disabled={false} dashesWhenDisabled={false} />);
      expect(driver.getValue()).toBe('10:00 AM');
    });
  });

  describe('tickers', () => {
    it('should display backoffice style tickers', () => {
      const driver = createDriver(<TimePicker/>);
      expect(driver.getTickers()).toBeTruthy();
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<TimePicker/>, timePickerTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<TimePicker/>, enzymeTimePickerTestkitFactory, mount)).toBe(true);
    });
  });
});
