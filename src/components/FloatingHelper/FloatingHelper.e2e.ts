import * as eyes from 'eyes.it';
import {browser, ElementFinder} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {floatingHelperTestkitFactory} from '../../testkit/protractor';
import {storySettings} from '../../../stories/FloatingHelper/StorySettings';

describe('FloatingHelper', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);

    beforeEach(async () => {
        await browser.get(storyUrl);
    });

    eyes.it('should display title and text', async () => {
        const driver = floatingHelperTestkitFactory({dataHook: storySettings.dataHook});
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        expect(await driver.getHelperContentDriver().hasTitle()).toBeTruthy();
        expect(await driver.getHelperContentDriver().getTitleContent()).toBe('This is the title');
        expect(await driver.getHelperContentDriver().getBodyContent()).toBe('This is the a long text which is passed in the `text` propterty');
    });

    eyes.it('should display text only', async () => {
        const example = storySettings.examples.textOnly;
        const driver = floatingHelperTestkitFactory({dataHook: example.dataHook});
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        expect(await driver.getHelperContentDriver().hasTitle()).toBeFalsy();
        expect(await driver.getHelperContentDriver().getBodyContent()).toBe(example.params.text);
    });
});
