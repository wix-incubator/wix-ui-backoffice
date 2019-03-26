import * as React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { linearProgressBarDriverFactory } from './LinearProgressBar.driver';
import { LinearProgressBar, LinearProgressBarProps } from './LinearProgressBar';
import { linearProgressBarTestkitFactory } from '../../testkit';
import { linearProgressBarTestkitFactory as enzymeLinearProgressBarTestkitFactory } from '../../testkit/enzyme';
import { runTestkitExistsSuite } from '../../common/testkitTests';
import * as eventually from 'wix-eventually';

describe('LinearProgressBar', () => {
  const createDriver = createDriverFactory(linearProgressBarDriverFactory);

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
        <LinearProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isTooltipShown()).toBe(false);
      driver.getTooltip().mouseEnter();
      expect(driver.isTooltipShown()).toBe(true);
      expect(driver.getTooltip().getContentElement().innerHTML).toContain(
        errorProps.errorMessage,
      );
      driver.getTooltip().mouseLeave();
    });

    it('should display tooltip text only on hover using `shouldLoadAsync` prop', async () => {
      const driver = createDriver(
        <LinearProgressBar shouldLoadAsync {...defaultProps} {...errorProps} />,
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
        <LinearProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isErrorIconShown()).toBe(true);
    });
  });

  describe('on completion', () => {
    const successProps: LinearProgressBarProps = {
      value: 100,
      showProgressIndication: true,
    };

    it('should display success icon', () => {
      const driver = createDriver(<LinearProgressBar {...successProps} />);
      expect(driver.isSuccessIconShown()).toBe(true);
    });
  });

  it(`should not throw an error when component isn't rendered`, () => {
    const driverFactoryWrapper = { createDriver };
    const isComponentRendered = false;

    jest.spyOn(driverFactoryWrapper, 'createDriver');
    driverFactoryWrapper.createDriver(
      <div>{isComponentRendered && <LinearProgressBar />}</div>,
    );

    expect(driverFactoryWrapper.createDriver).not.toThrow();
  });

  runTestkitExistsSuite({
    Element: <LinearProgressBar {...defaultProps} />,
    testkitFactory: linearProgressBarTestkitFactory,
    enzymeTestkitFactory: enzymeLinearProgressBarTestkitFactory,
  });
});
