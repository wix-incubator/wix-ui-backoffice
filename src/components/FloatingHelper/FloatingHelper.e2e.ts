import * as eyes from 'eyes.it';
import { browser, ElementFinder , $} from 'protractor';
import { createStoryUrl, waitForVisibilityOf, scrollToElement } from 'wix-ui-test-utils/protractor';
import * as autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { floatingHelperTestkitFactory, FloatingHelperDriver } from '../../testkit/protractor';
import { storySettings } from '../../../stories/FloatingHelper/StorySettings';

describe('FloatingHelper', () => {
    let driver: FloatingHelperDriver;
    
    eyes.it('should be opened by default', async () => {
        const storyUrl = createStoryUrl({kind:storySettings.kind, story:storySettings.story, withExamples:false});
        await browser.get(storyUrl);
        driver = floatingHelperTestkitFactory({ dataHook: storySettings.dataHook });
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        expect(await driver.isOpened()).toBeTruthy();
    });

    eyes.it('should have appearance light', async () => {
        const storyUrl = createStoryUrl({kind:storySettings.kind, story:storySettings.story, withExamples:true});
        await browser.get(storyUrl);
        driver = floatingHelperTestkitFactory({ dataHook: 'story-floating-helper-light' });
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        await scrollToElement($('[data-hook=appearance-light-example-container]'));
    });
});
