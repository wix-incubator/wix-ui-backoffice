import * as eyes from 'eyes.it';
import {browser, ElementFinder} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';

import {globalHelperTestkitFactory} from '../../testkit/protractor';
import {storySettings} from './../../../stories/GlobalHelper/StorySettings';

describe('GlobalHelper', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);

    const driver = globalHelperTestkitFactory({dataHook: storySettings.dataHook});

    beforeEach(async () => {
        await browser.get(storyUrl);
        await waitForVisibilityOf(driver.element(), 'Cannot find GlobalHelper');
    });

    eyes.it('should display title', async () => {
        expect(await driver.getHelperContentDriver().hasTitle()).toBeTruthy();
        expect(await driver.getHelperContentDriver().getTitleText()).toBe('This is the title');
    });
});
