import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {circularProgressBarDriverFactory} from './CircularProgressBar.driver';
import {CircularProgressBar, CircularProgressBarProps} from './CircularProgressBar';
import {circularProgressBarTestkitFactory} from '../../testkit';
import {circularProgressBarTestkitFactory as CircularLinearProgressBarTestkitFactory} from '../../testkit/enzyme';
import {runTestkitExistsSuite} from '../../common/testkitTests';

describe('CircularProgressBar', () => {
  const createDriver = createDriverFactory(circularProgressBarDriverFactory);
  const defaultProps = {
    value: 40
  }

  describe('on error', () => {
    const errorProps = {
      error: true,
      errorMessage: 'No soup for you',
      showProgressIndication: true
    }

    it('should display tooltip text only on hover', () => {
      const driver = createDriver(<CircularProgressBar {...defaultProps} {...errorProps} />);
      expect(driver.isTooltipShown()).toBe(false);
      driver.getTooltip().mouseEnter();
      expect(driver.isTooltipShown()).toBe(true);
      expect(driver.getTooltip().getContentElement().innerHTML).toContain(errorProps.errorMessage);
    });

    it('should display error icon', () => {
      const driver = createDriver(<CircularProgressBar {...defaultProps} {...errorProps} />);
      expect(driver.isErrorIconShown()).toBe(true);
    });
  });

  describe('on completion', () => {
    const successProps: CircularProgressBarProps = {
      value: 100,
      showProgressIndication: true,
    }

    it('should display success icon', () => {
      const driver = createDriver(<CircularProgressBar {...successProps}/>);
      expect(driver.isSuccessIconShown()).toBe(true);
    });
  });

  runTestkitExistsSuite({
    Element: <CircularProgressBar {...defaultProps} />,
    testkitFactory: circularProgressBarTestkitFactory,
    enzymeTestkitFactory: CircularLinearProgressBarTestkitFactory
  });

});
