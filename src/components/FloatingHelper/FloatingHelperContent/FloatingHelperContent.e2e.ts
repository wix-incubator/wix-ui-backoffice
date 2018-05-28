import * as eyes from 'eyes.it';
import { browser, ElementFinder } from 'protractor';
import { getStoryUrl, waitForVisibilityOf, scrollToElement, protractorTestkitFactoryCreator } from 'wix-ui-test-utils/protractor';
import { floatingHelperContentDriverFactory, FloatingHelperContentDriver } from './FloatingHelperContent.protractor.driver';
import { storySettings } from '../../../../stories/FloatingHelperContent/StorySettings';


export const floatingHelperContentTestkitFactory = protractorTestkitFactoryCreator<FloatingHelperContentDriver>(floatingHelperContentDriverFactory);

describe('FloatingHelperContent', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);

    beforeEach(async () => {
        await browser.get(storyUrl);
    });

    describe('FloatingHelperContent variations', () => {
        storySettings.exampleDataHooks.forEach(dataHook => {
            eyes.it(`should display example with dataHook ${dataHook}`, async () => {
                const driver = floatingHelperContentTestkitFactory({ dataHook });
                await scrollToElement(driver.element());
                await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelperContent');
            });
        });
    });
});
