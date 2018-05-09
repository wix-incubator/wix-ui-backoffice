import * as React from 'react';
import {helperContentDriverFactory} from './HelperContent.driver';
import {HelperContent, ActionButtonTheme} from '.';
import { ButtonSkin , ButtonPriority} from '../../Button';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import { mount } from 'enzyme';

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
      expect(driver.getActionButtonDriver().getTextContent()).toBe(actionText);
    });

    it('should have button with skin=white and priority=secondary by default', () => {
      const driver = createDriver(<HelperContent actionText="Click me!" />);
      expect(driver.getActionButtonDriver().getSkin()).toBe(ButtonSkin.white);
      expect(driver.getActionButtonDriver().getPriority()).toBe(ButtonPriority.secondary);
    });

    it('should have button with skin=premium and priority=primary', () => {
      const driver = createDriver(<HelperContent actionText="Click me!" actionTheme={ActionButtonTheme.premium}/>);
      expect(driver.getActionButtonDriver().getSkin()).toBe(ButtonSkin.premium);
      expect(driver.getActionButtonDriver().getPriority()).toBe(ButtonPriority.primary);
    });
  });

  describe('image prop', () => {
    it('should not be visible by default', () => {
      const driver = createDriver(<HelperContent/>);
      expect(driver.hasImage()).toBe(false);
    });

    it('should render the image', () => {
      const driver = createDriver(<HelperContent image={<div>🤔</div>}/>);
      expect(driver.hasImage()).toBe(true);
      expect(driver.getImage()).toEqual(mount(<div>🤔</div>).getDOMNode());
    });
  });
});
