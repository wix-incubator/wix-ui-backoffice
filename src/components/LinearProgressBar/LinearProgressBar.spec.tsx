import * as React from 'react';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {linearProgressBarDriverFactory} from './LinearProgressBar.driver';
import {LinearProgressBar, LinearProgressBarProps} from './LinearProgressBar';
import { linearProgressBarTestkitFactory } from '../../testkit';
import {linearProgressBarTestkitFactory as enzymeLinearProgressBarTestkitFactory} from '../../testkit/enzyme';
import { runTestkitExistsSuite } from '../../common/testkitTests';

describe('LinearProgressBar', () => {

    const createDriver = createDriverFactory(linearProgressBarDriverFactory);

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
            const driver = createDriver(<LinearProgressBar {...defaultProps} {...errorProps} />);
            expect(driver.isTooltipShown()).toBe(false);
            driver.getTooltip().mouseEnter();
            expect(driver.isTooltipShown()).toBe(true);
            expect(driver.getTooltip().getContentElement().innerHTML).toContain(errorProps.errorMessage);
        });

        it('should display error icon', () => {
            const driver = createDriver(<LinearProgressBar {...defaultProps} {...errorProps} />);
            expect(driver.isErrorIconShown()).toBe(true);
        });

    });

    describe('on completion', () => {

        const successProps: LinearProgressBarProps = {
            value: 100,
            showProgressIndication: true,
        }

        it('should display success icon', () => {
            const driver = createDriver(<LinearProgressBar {...successProps}/>);
            expect(driver.isSuccessIconShown()).toBe(true);
        });

    });

    runTestkitExistsSuite({
        Element: <LinearProgressBar {...defaultProps} />,
        testkitFactory: linearProgressBarTestkitFactory,
        enzymeTestkitFactory: enzymeLinearProgressBarTestkitFactory
    });

});
