import * as eyes from 'eyes.it';
import {$, browser, by} from 'protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {addressInputTestkitFactory} from '../../testkit/protractor';

describe('AddressInput', () => {
    const storyUrl = getStoryUrl('Components', 'AddressInput');
    let driver;

    beforeAll(async () => {
        await browser.get(storyUrl);
        driver = addressInputTestkitFactory({dataHook: 'storybook-address-input'});
        await waitForVisibilityOf(driver.element(), 'Cannot find AddressInput');
    });

    afterEach(() => autoExampleDriver.reset());

    eyes.it('should exist', () => {
        expect(driver.element().isPresent()).toBe(true);
    });

    eyes.it('should display mocked addresses', async () => {
        driver.pressKey('n');
        const optionCount = await driver.dropdownContent().getOptionsCount();
        expect(optionCount).toBeGreaterThan(0);
        driver.pressKey('\b');
        driver.pressKey('\t');
    });

    eyes.it('should display the disabled state', async () => {
        await autoExampleDriver.setProps({disabled: true});
        const element = await driver.element();
        const input = await element.element(by.css('input'));
        const isDisabled = await input.getAttribute('disabled');
        expect(isDisabled).toBeTruthy();
    });
});
