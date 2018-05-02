import * as eyes from 'eyes.it';
import {browser, ElementFinder} from 'protractor';
import {getStoryUrl, waitForVisibilityOf, scrollToElement} from 'wix-ui-test-utils/protractor';
import {floatingHelperTestkitFactory} from '../../testkit/protractor';
import {storySettings} from '../../../stories/FloatingHelper/StorySettings';

describe('FloatingHelper', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);

    beforeEach(async () => {
        await browser.get(storyUrl);
    });

    describe('HelperContent variations', () => {
        storySettings.exampleDataHooks.forEach(dataHook=> {
            eyes.it(`should display example with dataHook ${dataHook}`, async () => {
                const driver = floatingHelperTestkitFactory({dataHook});
                await scrollToElement(driver.element());
                await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
            });
        });
    });
});
