import * as eyes from 'eyes.it';
import { browser, ElementFinder } from 'protractor';
import { getStoryUrl, waitForVisibilityOf, scrollToElement, protractorTestkitFactoryCreator } from 'wix-ui-test-utils/protractor';
import { helperContentDriverFactory, HelperContentDriver } from './HelperContent.protractor.driver';
import { storySettings } from '../../../../stories/HelperContent/StorySettings';


export const helperContentTestkitFactory = protractorTestkitFactoryCreator<HelperContentDriver>(helperContentDriverFactory);

fdescribe('HelperContent', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);

    beforeEach(async () => {
        await browser.get(storyUrl);
    });

    describe('HelperContent variations', () => {
        storySettings.exampleDataHooks.forEach(dataHook => {
            eyes.it(`should display example with dataHook ${dataHook}`, async () => {
                const driver = helperContentTestkitFactory({ dataHook });
                await scrollToElement(driver.element());
                await waitForVisibilityOf(driver.element(), 'Cannot find HelperContent');
            });
        });
    });
});
