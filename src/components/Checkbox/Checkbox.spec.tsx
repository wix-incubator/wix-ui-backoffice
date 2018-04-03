import * as React from 'react';
import {checkboxDriverFactory} from './Checkbox.driver';
import {Checkbox} from './';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {isTestkitExists} from 'wix-ui-test-utils/vanilla';
import {isEnzymeTestkitExists} from 'wix-ui-test-utils/enzyme';
import {checkboxTestkitFactory} from '../../testkit';
import {checkboxTestkitFactory as enzymeCheckboxTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('Checkbox', () => {
  const createDriver = createDriverFactory(checkboxDriverFactory);

  it('should be unchecked and not disabled by default', () => {
    const driver = createDriver(<Checkbox/>);
    expect(driver.isChecked()).toBeFalsy();
    expect(driver.isDisabled()).toBeFalsy();
  });

  it('should be checked', () => {
    const driver = createDriver(<Checkbox checked/>);
    expect(driver.isChecked()).toBeTruthy();
  });

  it('should be disabled', () => {
    const driver = createDriver(<Checkbox disabled/>);
    expect(driver.isDisabled()).toBeTruthy();
  });

  it('should have an error state', () => {
    const driver = createDriver(<Checkbox error />);
    expect(driver.hasErrorState()).toBeTruthy();
  });

  it('should have a label', () => {
    const driver = createDriver(<Checkbox disabled>Hey</Checkbox>);
    expect(driver.children().textContent).toBe('Hey');
  });

  it('should call onChange when clicking the Checkbox', () => {
    const onChange = jest.fn();

    const driver = createDriver(<Checkbox onChange={onChange}/>);

    driver.click();
    expect(onChange).toBeCalled();
  });

  it('should not call onChange when clicking disabled Checkbox', () => {
    const onChange = jest.fn();

    const driver = createDriver(<Checkbox onChange={onChange} disabled/>);

    driver.click();
    expect(onChange).not.toBeCalled();
  });

  it('should not run in indeterminate mode when not specified', () => {
    const driver = createDriver(<Checkbox/>);

    expect(driver.isIndeterminate()).toBeFalsy();
  });

  it('should run in indeterminate mode when specified', () => {
    const driver = createDriver(<Checkbox indeterminate/>);

    expect(driver.isIndeterminate()).toBeTruthy();
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Checkbox>12</Checkbox>, checkboxTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Checkbox>12</Checkbox>, enzymeCheckboxTestkitFactory, mount)).toBe(true);
    });
  });
});
