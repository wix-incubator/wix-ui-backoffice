import * as eyes from 'eyes.it';
import {browser, ElementFinder} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {floatingHelperTestkitFactory} from '../../testkit/protractor';
import {storySettings} from 'stories/FloatingHelper/StorySettings';

describe('FloatingHelper', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);

    const driver = floatingHelperTestkitFactory({dataHook: storySettings.dataHook});

    beforeEach(async () => {
        await browser.get(storyUrl);
        await autoExampleDriver.reset();
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
    });

    eyes.it('should display title and text', async () => {
        expect(await driver.getHelperContentDriver().hasTitle()).toBeTruthy();
        expect(await driver.getHelperContentDriver().getTitleContent()).toBe('This is the title');
        expect(await driver.getHelperContentDriver().getTextContent()).toBe('This is the a long text which is passed in the `text` propterty');
    });

    eyes.it('should display text only', async () => {
        expect(await driver.getHelperContentDriver().hasTitle()).toBeFalsy();
        expect(await driver.getHelperContentDriver().getTextContent()).toBe('This is the a long text which is passed in the `text` propterty');
    });
});
