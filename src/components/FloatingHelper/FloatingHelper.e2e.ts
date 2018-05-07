import * as eyes from 'eyes.it';
import { browser, ElementFinder } from 'protractor';
import { getStoryUrl, waitForVisibilityOf, scrollToElement } from 'wix-ui-test-utils/protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import { floatingHelperTestkitFactory, FloatingHelperDriver } from '../../testkit/protractor';
import { storySettings } from '../../../stories/FloatingHelper/StorySettings';

describe('FloatingHelper', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);
    let driver: FloatingHelperDriver;

    beforeAll(async () => {
        await browser.get(storyUrl);
        driver = floatingHelperTestkitFactory({ dataHook: storySettings.dataHook });
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
    });

    afterEach(() => autoExampleDriver.reset());

    describe('CloseButton', () => {
        eyes.it('should have a close-button by default', async () => {
            expect(await driver.hasCloseButton()).toBeTruthy();
        });

        eyes.it('should NOT have a close-button', async () => {
            await autoExampleDriver.setProps({ showCloseButton: false });
            expect(await driver.hasCloseButton()).toBeFalsy();
        });
    });
});
