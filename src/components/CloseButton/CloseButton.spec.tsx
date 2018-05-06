import * as React from 'react';
import defaults = require('lodash/defaults');
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { closeButtonDriverFactory } from './CloseButton.driver';
import { closeButtonTestkitFactory } from '../../testkit';
import { closeButtonTestkitFactory as enzymeCloseButtonTestkitFactory } from '../../testkit/enzyme';
import { runTestkitExistsSuite } from '../../common/testkitTests';
import { CloseButton, CloseButtonProps } from './CloseButton';
import { Skin, Size } from './constants';
import { enumValues } from '../../utils';

describe('CloseButton', () => {
  const createDriver = createDriverFactory(closeButtonDriverFactory);
  const CloseButtonWithDefaults = withDefaultsHOC(CloseButton,
    {
      children: 'Click me!'
    });

  describe('skin prop', () => {
    it('should be standard by default', () => {
      const driver = createDriver(<CloseButtonWithDefaults />);
      expect(driver.getSkin()).toBe(Skin.standard);
    });

    enumValues(Skin).forEach((skin: Skin) => {
      it(`should be '${skin}'`, () => {
        const driver = createDriver(<CloseButtonWithDefaults skin={skin} />);
        expect(driver.getSkin()).toBe(skin);
      });
    });
  });

  describe('size prop', () => {
    it('should be small by default', () => {
      const driver = createDriver(<CloseButtonWithDefaults />);
      expect(driver.getSize()).toBe(Size.small);
    });

    enumValues(Size).forEach((size: Size) => {
      it(`should be '${size}'`, () => {
        const driver = createDriver(<CloseButtonWithDefaults size={size} />);
        expect(driver.getSize()).toBe(size);
      });
    });
  });

  runTestkitExistsSuite({
    Element: <CloseButton />,
    testkitFactory: closeButtonTestkitFactory,
    enzymeTestkitFactory: enzymeCloseButtonTestkitFactory
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
