import * as React from 'react';
import {helperContentDriverFactory} from './HelperContent.driver';
import {HelperContent} from '.';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('HelperContent', () => {
  const createDriver = createDriverFactory(helperContentDriverFactory);

  it('should be empty by default', () => {
    const driver = createDriver(<HelperContent text="text"/>);
    expect(driver.hasTitle()).toBeFalsy();
    expect(driver.hasText()).toBeFalsy();
  });

  it('should have title and text with proper values', () => {
    const driver = createDriver(<HelperContent title="title" text="text"/>);
    expect(driver.hasTitle()).toBeTruthy();
    expect(driver.hasText()).toBeTruthy();
    expect(driver.getTitleContent()).toBe('title');
    expect(driver.getTextContent()).toBe('text');
  });

});
