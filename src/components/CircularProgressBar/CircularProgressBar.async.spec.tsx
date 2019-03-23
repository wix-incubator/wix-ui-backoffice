import * as React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { circularProgressBarDriverFactory } from './CircularProgressBar.driver';
import {
  CircularProgressBar,
} from './CircularProgressBar';
import { sleep } from 'wix-ui-test-utils/react-helpers';

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

    it('should display tooltip text only on hover', async () => {
      const driver = createDriver(
        <CircularProgressBar shouldLoadAsync {...defaultProps} {...errorProps} />,
      );
      await sleep(0);
      expect(driver.isTooltipShown()).toBe(false);
      driver.getTooltip().mouseEnter();
      expect(driver.isTooltipShown()).toBe(true);
      expect(driver.getTooltip().getContentElement().innerHTML).toContain(
        errorProps.errorMessage,
      );
    });
  });
});
