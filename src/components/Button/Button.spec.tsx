import * as React from 'react';
import defaults = require('lodash/defaults');
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { buttonDriverFactory } from './Button.driver';
import { buttonTestkitFactory } from '../../testkit';
import { buttonTestkitFactory as enzymeButtonTestkitFactory } from '../../testkit/enzyme';
import { runTestkitExistsSuite } from '../../common/testkitTests';
import { Button, ButtonProps } from './';
import { Skin, Priority, Size } from './constants';
import { enumValues } from '../../utils';

describe('Button', () => {
  const createDriver = createDriverFactory(buttonDriverFactory);
  const ButtonWithDefaults = withDefaultsHOC(Button,
    {
      children: 'Click me!'
    });

  describe('type prop', () => {
    it('should be passed down', () => {
      const type = 'button';
      const driver = createDriver(<Button type={type}/>);
      expect(driver.getType()).toBe(type);
    });
  });

  describe('onClick prop', () => {
    it('should be called on click', () => {
      const onClick = jest.fn();
      const driver = createDriver(<Button onClick={onClick}/>);
      driver.click();
      expect(onClick).toBeCalled();
    });
  });

  describe('disabled prop', () => {
    it('should be falsy by default', () => {
      const driver = createDriver(<Button/>);
      expect(driver.isDisabled()).toBe(false);
    });

    it('should not call onClick when truthy', () => {
      const onClick = jest.fn();
      const driver = createDriver(<Button onClick={onClick} disabled/>);
      driver.click();
      expect(driver.isDisabled()).toBe(true);
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('children', () => {
    it('should be rendered', () => {
      const content = 'Click me';
      const driver = createDriver(<Button>{content}</Button>);
      expect(driver.getTextContent()).toBe(content);
    });
  });

  describe('skin prop', () => {
    it('should be standard by default', () => {
      const driver = createDriver(<ButtonWithDefaults />);
      expect(driver.getSkin()).toBe(Skin.standard);
    });

    enumValues(Skin).forEach((skin: Skin) => {
      it(`should be '${skin}'`, () => {
        const driver = createDriver(<ButtonWithDefaults skin={skin} />);
        expect(driver.getSkin()).toBe(skin);
      });
    });
  });

  describe('priority prop', () => {
    it('should be primary by default', () => {
      const driver = createDriver(<ButtonWithDefaults />);
      expect(driver.getPriority()).toBe(Priority.primary);
    });

    enumValues(Priority).forEach((priority: Priority) => {
      it(`should be '${priority}'`, () => {
        const driver = createDriver(<ButtonWithDefaults priority={priority} />);
        expect(driver.getPriority()).toBe(priority);
      });
    });
  });

  describe('size prop', () => {
    it('should be medium by default', () => {
      const driver = createDriver(<ButtonWithDefaults />);
      expect(driver.getSize()).toBe(Size.medium);
    });

    enumValues(Size).forEach((size: Size) => {
      it(`should be '${size}'`, () => {
        const driver = createDriver(<ButtonWithDefaults size={size} />);
        expect(driver.getSize()).toBe(size);
      });
    });
  });

  runTestkitExistsSuite({
    Element: <Button />,
    testkitFactory: buttonTestkitFactory,
    enzymeTestkitFactory: enzymeButtonTestkitFactory
  });
});


// TODO: consider putting this in 'test/utils'
/**
 * Create a Component with applied default props.
 * The new component can receive Partial<P> instead of P.
 */
function withDefaultsHOC<P>(Component: React.SFC<P>, defaultProps: P): React.SFC<Partial<P>> {
  return (partialProps?: Partial<P>) => {
    return React.createElement(Component, defaults({}, partialProps, defaultProps));
  }
}
