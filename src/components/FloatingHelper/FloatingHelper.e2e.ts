import * as eyes from 'eyes.it';
import {browser, ElementFinder} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {floatingHelperTestkitFactory} from '../../testkit/protractor';
import {storySettings} from '../../../stories/FloatingHelper/StorySettings';

describe('FloatingHelper', () => {
    const storyUrl = getStoryUrl(storySettings.kind, storySettings.story);

    beforeEach(async () => {
        await browser.get(storyUrl);
    });

    // TODO: autoExampleDriver.setProps() can not accept content: React.ReactNode prop,
    // So we have to make another example for it. But it won't fit in the page, so we
    // need to either scroll to it for the snapshot, or add ability to render a single example.
    // We can also make a separate story for HelperContent and make it internal.
    xit('should display title only', async () => {
        const driver = floatingHelperTestkitFactory({dataHook: storySettings.dataHook});
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        expect(await driver.getHelperContentDriver().hasTitle()).toBeTruthy();
        expect(await driver.getHelperContentDriver().hasBody()).toBeFalsy();
        expect(await driver.getHelperContentDriver().hasActionButton()).toBeFalsy();
    });

    eyes.it('should display body only', async () => {
        const example = storySettings.examples.textOnly;
        const driver = floatingHelperTestkitFactory({dataHook: example.dataHook});
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        expect(await driver.getHelperContentDriver().hasTitle()).toBeFalsy();
    });

    eyes.it('should display title and text', async () => {
        const driver = floatingHelperTestkitFactory({dataHook: storySettings.dataHook});
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        expect(await driver.getHelperContentDriver().hasTitle()).toBeTruthy();
        expect(await driver.getHelperContentDriver().hasBody()).toBeTruthy();
    });

    // TODO: autoExampleDriver.setProps() can not accept content: React.ReactNode prop,
    // So we have to make another example for it. But it won't fit in the page, so we
    // need to either scroll to it for the snapshot, or add ability to render a single example.
    xit('should display title and action button', async () => {
        // TODO: add textAndAction example
        const example = storySettings.examples.textAndAction;
        const driver = floatingHelperTestkitFactory({dataHook: example.dataHook});
        await waitForVisibilityOf(driver.element(), 'Cannot find FloatingHelper');
        expect(await driver.getHelperContentDriver().hasTitle()).toBe(true);
        expect(await driver.getHelperContentDriver().hasActionButton()).toBe(true);
    });

});
