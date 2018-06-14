import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {linearProgressBarDriverFactory} from './LinearProgressBar.driver';
import {LinearProgressBar} from './LinearProgressBar';
import { linearProgressBarTestkitFactory } from '../../testkit';
import {linearProgressBarTestkitFactory as enzymeLinearProgressBarTestkitFactory} from '../../testkit/enzyme';
import { runTestkitExistsSuite } from '../../common/testkitTests';

describe('LinearProgressBar', () => {

    const createDriver = createDriverFactory(linearProgressBarDriverFactory);

    const defaultProps = {
        value: 40
    }
   
    it('should exist', () => {
      const driver = createDriver(<LinearProgressBar {...defaultProps}></LinearProgressBar>);
      expect(driver.exists()).toBe(true);
    });

    describe('on error', () => {

        const errorProps = {
            error: true,
            errorMessage: 'No soup for you',
            showProgressIndication: true
        }

        it('should display tooltip text only on hover', () => {
            const driver = createDriver(<LinearProgressBar {...defaultProps} {...errorProps} ></LinearProgressBar>);
            expect(driver.isTooltipShown()).toBe(false);
            driver.hoverOnTooltip();
            expect(driver.isTooltipShown()).toBe(true);
        });

        it('should display error icon', () => {
            const driver = createDriver(<LinearProgressBar {...defaultProps} {...errorProps} ></LinearProgressBar>);
            expect(driver.isErrorIconShown()).toBe(true);
        });
        
    });

    describe('on completion', () => {

        const successProps = {
            value: 100,
            showProgressIndication: true
        }

        it('should display success icon', () => {
            const driver = createDriver(<LinearProgressBar {...successProps}></LinearProgressBar>);
            expect(driver.isSuccessIconShown()).toBe(true);
        });
        
    });

    // runTestkitExistsSuite({
    //     Element: <LinearProgressBar {...defaultProps} />,
    //     testkitFactory: linearProgressBarTestkitFactory,
    //     enzymeTestkitFactory: enzymeLinearProgressBarTestkitFactory
    // });

});