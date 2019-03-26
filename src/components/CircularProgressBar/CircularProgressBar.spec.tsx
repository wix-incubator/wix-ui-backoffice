import * as React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { circularProgressBarDriverFactory } from './CircularProgressBar.driver';
import {
  CircularProgressBar,
  CircularProgressBarProps,
} from './CircularProgressBar';
import { circularProgressBarTestkitFactory } from '../../testkit';
import { circularProgressBarTestkitFactory as CircularLinearProgressBarTestkitFactory } from '../../testkit/enzyme';
import { runTestkitExistsSuite } from '../../common/testkitTests';
import { Size } from './constants';
import * as eventually from 'wix-eventually';


describe('CircularProgressBar', () => {
  const createDriver = createDriverFactory(circularProgressBarDriverFactory);
  const defaultProps = {
    value: 40,
  };

  describe('on error', () => {
    const errorProps = {
      error: true,
      errorMessage: 'No soup for you',
      showProgressIndication: true,
    };

    it('should display tooltip text only on hover', () => {
      const driver = createDriver(
        <CircularProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isTooltipShown()).toBe(false);
      driver.getTooltip().mouseEnter();
      expect(driver.isTooltipShown()).toBe(true);
      expect(driver.getTooltipErrorMessage()).toContain(
        errorProps.errorMessage,
      );
      driver.getTooltip().mouseLeave();
    });

    it('should display load and tooltip text only on hover with `shouldLoadAsync` prop', async () => {
      const driver = createDriver(
        <CircularProgressBar shouldLoadAsync {...defaultProps} {...errorProps} />,
      );
      await eventually(() => {
        expect(driver.getTooltip().exists()).toBe(true);
        expect(driver.isTooltipShown()).toBe(false);
        driver.getTooltip().mouseEnter();
        expect(driver.isTooltipShown()).toBe(true);
        expect(driver.getTooltipErrorMessage()).toContain(
          errorProps.errorMessage,
        );
        driver.getTooltip().mouseLeave();
      });
    });

    it('should display error icon', () => {
      const driver = createDriver(
        <CircularProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isErrorIconShown()).toBe(true);
    });
  });

  describe('on completion', () => {
    const successProps: CircularProgressBarProps = {
      value: 100,
      showProgressIndication: true,
    };

    it('should display success icon', () => {
      const driver = createDriver(<CircularProgressBar {...successProps} />);
      expect(driver.isSuccessIconShown()).toBe(true);
    });
  });

  describe('size prop', () => {
    Object.keys(Size).forEach((size: Size) => {
      it(`should be ${size}`, () => {
        const driver = createDriver(
          <CircularProgressBar {...defaultProps} size={size} />,
        );
        expect(driver.getSize()).toBe(size);
      });
    });

    it(`should be default ${Size.medium}`, () => {
      const driver = createDriver(<CircularProgressBar {...defaultProps} />);
      expect(driver.getSize()).toBe(Size.medium);
    });
  });

  it(`should not throw an error when component isn't rendered`, () => {
    const driverFactoryWrapper = { createDriver }
    const isComponentRendered = false;

    jest.spyOn(driverFactoryWrapper, 'createDriver');
    driverFactoryWrapper.createDriver(<div>{isComponentRendered && <CircularProgressBar />}</div>);

    expect(driverFactoryWrapper.createDriver).not.toThrow();
  });

  runTestkitExistsSuite({
    Element: <CircularProgressBar {...defaultProps} />,
    testkitFactory: circularProgressBarTestkitFactory,
    enzymeTestkitFactory: CircularLinearProgressBarTestkitFactory,
  });
});
