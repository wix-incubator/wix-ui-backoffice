import * as React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { circularProgressBarDriverFactory } from './CircularProgressBar.driver';
import {
  CircularProgressBar,
} from './CircularProgressBar';
import * as eventually from 'wix-eventually';

describe('CircularProgressBar', async () => {
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

    it('should display tooltip text only on hover', async () => {
      const driver = createDriver(
        <CircularProgressBar shouldLoadAsync {...defaultProps} {...errorProps} />,
      );
      await eventually(() => {
        expect(driver.isTooltipShown()).toBe(false);
        driver.getTooltip().mouseEnter();
        expect(driver.isTooltipShown()).toBe(true);
        expect(driver.getTooltipErrorMessage()).toContain(
          errorProps.errorMessage,
        );
      });
    });
  });
});
