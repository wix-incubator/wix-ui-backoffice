import * as eyes from 'eyes.it';
import { browser, ElementFinder } from 'protractor';
import { createStoryUrl, waitForVisibilityOf, scrollToElement } from 'wix-ui-test-utils/protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import { floatingHelperTestkitFactory, FloatingHelperDriver } from '../../testkit/protractor';
import { storySettings } from '../../../stories/FloatingHelper/StorySettings';

describe('FloatingHelper', () => {
    const storyUrl = createStoryUrl({kind:storySettings.kind, story:storySettings.story, withExamples:false});
    let driver: FloatingHelperDriver;

    beforeAll(async () => {
        await browser.get(storyUrl);
        driver = floatingHelperTestkitFactory({ dataHook: storySettings.dataHook });
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
    });

    afterEach(() => autoExampleDriver.reset());

    describe('default', () => {
        eyes.it('should be opened by default', async () => {
            expect(await driver.isOpened()).toBeTruthy();
        });
    });
});
