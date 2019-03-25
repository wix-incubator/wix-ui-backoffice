import * as React from 'react';
import { floatingHelperContentDriverFactory } from './FloatingHelperContent.driver';
import {
  FloatingHelperContent,
  FloatingHelperContentProps,
  ActionButtonTheme
} from '.';
import { ButtonSkin, ButtonPriority } from '../../Button';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { mount } from 'enzyme';
import defaults = require('lodash/defaults');

const noop = () => null;

describe('FloatingHelperContent', () => {
  const createDriver = createDriverFactory(floatingHelperContentDriverFactory);

  const FloatingHelperContentBuilder = withDefaultsHOC<
    FloatingHelperContentProps
  >({
    component: FloatingHelperContent,
    defaultProps: { body: 'this is the body' }
  });

  describe('title prop', () => {
    it('should not have title by default', () => {
      const driver = createDriver(<FloatingHelperContentBuilder />);
      expect(driver.hasTitle()).toBeFalsy();
    });

    it('should have title with proper content', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder title="title" />
      );
      expect(driver.hasTitle()).toBeTruthy();
      expect(driver.getTitleContent()).toBe('title');
    });
  });

  describe('body prop', () => {
    it('should have body with simple text content', () => {
      const driver = createDriver(<FloatingHelperContentBuilder body="body" />);
      expect(driver.hasBody()).toBeTruthy();
      expect(driver.getBodyContent()).toBe('body');
    });
  });

  describe('action button', () => {
    const actionProps: Partial<FloatingHelperContentProps> = {
      actionText: 'Click me !',
      onActionClick: noop
    };

    it('should not have action button by default', () => {
      const driver = createDriver(<FloatingHelperContentBuilder />);
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should not have action button if only actionText is passed', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder actionText="Click Me!" />
      );
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should not have action button if only onActionClick is passed', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder onActionClick={noop} />
      );
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should not have action button if actionText is an empty string', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder onActionClick={noop} actionText="" />
      );
      expect(driver.hasActionButton()).toBeFalsy();
    });

    it('should have action button with correct text', () => {
      const actionText = 'Click Me!';
      const driver = createDriver(
        <FloatingHelperContentBuilder
          actionText={actionText}
          onActionClick={noop}
        />
      );
      expect(driver.hasActionButton()).toBeTruthy();
      expect(driver.getActionButtonText()).toBe(actionText);
    });

    it('should have button with skin=white and priority=secondary by default', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder {...actionProps} />
      );
      expect(driver.matchesActionButtonClassName(ButtonSkin.white)).toBe(true);
      expect(
        driver.matchesActionButtonClassName(ButtonPriority.secondary)
      ).toBe(true);
    });

    it('should have button with skin=premium and priority=primary', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder
          {...actionProps}
          actionTheme={ActionButtonTheme.premium}
        />
      );
      expect(driver.matchesActionButtonClassName(ButtonSkin.premium)).toBe(
        true
      );
    });

    it('should call onClick when action button clicked', () => {
      const spy = jest.fn();
      const driver = createDriver(
        <FloatingHelperContentBuilder
          actionText="Click me!"
          onActionClick={spy}
        />
      );
      driver.clickActionButton();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('image prop', () => {
    it('should not be visible by default', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder actionText="Click me!" />
      );
      expect(driver.hasImage()).toBeFalsy();
    });

    it('should render the image', () => {
      const driver = createDriver(
        <FloatingHelperContentBuilder image={<div>🤔</div>} />
      );
      expect(driver.hasImage()).toBeTruthy();
      expect(driver.getImage()).toEqual(mount(<div>🤔</div>).getDOMNode());
    });
  });
});

/**
 * Create a Component with applied default props.
 * The new component can receive Partial<P> instead of P.
 */
function withDefaultsHOC<P>({
  component,
  defaultProps
}: {
  component: React.SFC<P>;
  defaultProps: P;
}): React.SFC<Partial<P>> {
  return (partialProps?: Partial<P>) => {
    return React.createElement(
      component,
      defaults({}, partialProps, defaultProps)
    );
  };
}
