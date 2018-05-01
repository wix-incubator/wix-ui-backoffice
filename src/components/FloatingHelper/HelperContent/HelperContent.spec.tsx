import * as React from 'react';
import {helperContentDriverFactory} from './HelperContent.driver';
import {HelperContent} from '.';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';

describe('HelperContent', () => {
  const createDriver = createDriverFactory(helperContentDriverFactory);

  describe('title prop', () => {
    it('should not have title by default', () => {
      const driver = createDriver(<HelperContent />);
      expect(driver.hasTitle()).toBeFalsy();
    });

    it('should have title with proper content', () => {
      const driver = createDriver(<HelperContent title="title" />);
      expect(driver.hasTitle()).toBeTruthy();
      expect(driver.getTitleContent()).toBe('title');
    });
  });

  describe('body prop', () => {
    it('should not have body by default', () => {
      const driver = createDriver(<HelperContent />);
      expect(driver.hasTitle()).toBeFalsy();
    });

    it('should have body with simple text', () => {
      const driver = createDriver(<HelperContent body="body" />);
      expect(driver.hasBody()).toBeTruthy();
      expect(driver.getBodyContent()).toBe('body');
    });
  });

  describe('action button', () => {
    it('should not have action button by default', () => {
      const driver = createDriver(<HelperContent />);
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should have action button when actionText prop is non-empty', () => {
      const actionText = 'Click Me!'
      const driver = createDriver(<HelperContent actionText={actionText} />);
      expect(driver.hasActionButton()).toBeTruthy();
      expect(driver.getActionButtonContent()).toBe(actionText);
    });
  });

});
