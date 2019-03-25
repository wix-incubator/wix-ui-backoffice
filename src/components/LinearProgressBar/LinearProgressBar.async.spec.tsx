import * as React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { linearProgressBarDriverFactory } from './LinearProgressBar.driver';
import { LinearProgressBar } from './LinearProgressBar';
import * as eventually from 'wix-eventually';

describe('LinearProgressBar', () => {
  const createDriver = createDriverFactory(linearProgressBarDriverFactory);

  const defaultProps = {
    value: 40,
    shouldLoadAsync: true,
  };

  describe('on error', () => {
    const errorProps = {
      error: true,
      errorMessage: 'No soup for you',
      showProgressIndication: true,
    };

    it('should display tooltip text only on hover using `shouldLoadAsync` prop', async () => {
      const driver = createDriver(
        <LinearProgressBar shouldLoadAsync {...defaultProps} {...errorProps} />,
      );
      await eventually(() => {
        expect(driver.isTooltipShown()).toBe(false);
        driver.getTooltip().mouseEnter();
        expect(driver.isTooltipShown()).toBe(true);
        expect(driver.getTooltip().getContentElement().innerHTML).toContain(
          errorProps.errorMessage,
        );
      });
    });
  });
});
