import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';

import {globalHelperTestkitFactory} from '../../testkit/protractor';
import {storySettings} from './../../../stories/GlobalHelper/StorySettings';

fdescribe('GlobalHelper', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);
    const driver = globalHelperTestkitFactory({dataHook: storySettings.dataHook});

    beforeEach(async () => {
        await browser.get(storyUrl);
        await waitForVisibilityOf(driver.element(), 'Cannot find GlobalHelper');
    });

    eyes.it('should display correct content', async () => {
        await expect(driver.getContentElement().getText()).toBe('This is the GlobalHelper content');
    });
});
