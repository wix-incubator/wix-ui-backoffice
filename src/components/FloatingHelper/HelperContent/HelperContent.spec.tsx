import * as React from 'react';
import { helperContentDriverFactory } from './HelperContent.driver';
import { HelperContent, ActionButtonTheme } from '.';
import { ButtonSkin, ButtonPriority } from '../../Button';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { mount } from 'enzyme';

const noop = ()=> null;

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
    const actionProps = {actionText:'Click me !', onAction:noop};

    it('should not have action button by default', () => {
      const driver = createDriver(<HelperContent />);
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should not have action button if only actionText is passed', () => {
      const driver = createDriver(<HelperContent actionText="Click Me!"/>);
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should not have action button if only onAction is passed', () => {
      const driver = createDriver(<HelperContent onAction={noop} />);
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should not have action button if actionText is an empty string', () => {
      const driver = createDriver(<HelperContent onAction={noop} actionText=""/>);
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should have action button with correct text', () => {
      const actionText = 'Click Me!'
      const driver = createDriver(<HelperContent actionText={actionText} onAction={noop}/>);
      expect(driver.hasActionButton()).toBeTruthy();
      expect(driver.getActionButtonDriver().getTextContent()).toBe(actionText);
    });

    it('should have button with skin=white and priority=secondary by default', () => {
      const driver = createDriver(<HelperContent {...actionProps} />);
      expect(driver.getActionButtonDriver().getSkin()).toBe(ButtonSkin.white);
      expect(driver.getActionButtonDriver().getPriority()).toBe(ButtonPriority.secondary);
    });

    it('should have button with skin=premium and priority=primary', () => {
      const driver = createDriver(<HelperContent {...actionProps} actionTheme={ActionButtonTheme.premium} />);
      expect(driver.getActionButtonDriver().getSkin()).toBe(ButtonSkin.premium);
      expect(driver.getActionButtonDriver().getPriority()).toBe(ButtonPriority.primary);
    });

    it('should call onClick when action button clicked', () => {
      const spy = jest.fn();
      const driver = createDriver(<HelperContent actionText="Click me!" onAction={spy} />);
      driver.getActionButtonDriver().click();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('image prop', () => {
    it('should not be visible by default', () => {
      const driver = createDriver(<HelperContent actionText="Click me!" />);
      expect(driver.hasImage()).toBeFalsy();
    });

    it('should render the image', () => {
      const driver = createDriver(<HelperContent image={<div>🤔</div>} />);
      expect(driver.hasImage()).toBeTruthy();
      expect(driver.getImage()).toEqual(mount(<div>🤔</div>).getDOMNode());
    });
  });
});
