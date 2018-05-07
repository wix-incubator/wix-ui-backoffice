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
