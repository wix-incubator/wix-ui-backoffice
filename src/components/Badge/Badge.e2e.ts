import * as eyes from 'eyes.it';
import {$, browser, Key} from 'protractor';
import {getStoryUrl, scrollToElement, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {badgeTestkitFactory} from '../../testkit/protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');

const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);

// TODO: move method to protractor-helpers, or to the AutoExampleDriver?
const focusElementInAutoExample = async element => {
  const parentElement = await element.getWebElement().getDriver();

  await parentElement
    .actions()
    .click()
    .perform();

  await browser
    .actions()
    .sendKeys(Key.TAB)
    .perform();
};

describe('Badge', () => {
  const storyUrl = getStoryUrl('Components', 'Badge');

  beforeEach(() => browser.get(storyUrl));

  describe('AutoExample', () => {

    beforeEach(async () => {
      await autoExampleDriver.reset();
    });

    eyes.it('should display correct content', async () => {
      const driver = badgeTestkitFactory({dataHook: 'storybook-badge'});
      await waitForVisibilityOf(driver.element(), 'Cannot find Badge');
      expect(await driver.text()).toBe('I\'M A BADGE!');
    });

    eyes.it('should not have a focus state when onClick prop is not used', async () => {
      await autoExampleDriver.setProps({onClick: undefined});

      const driver = badgeTestkitFactory({dataHook: 'storybook-badge'});
      await waitForVisibilityOf(driver.element(), 'Cannot find Badge');
      await focusElementInAutoExample(driver.element());
    });

    eyes.it('should have a focus state when onClick prop is used', async () => {
      await autoExampleDriver.setProps({onClick: () => true});

      const driver = badgeTestkitFactory({dataHook: 'storybook-badge'});
      await waitForVisibilityOf(driver.element(), 'Cannot find Badge');
      await focusElementInAutoExample(driver.element());
    });
  });

  eyes.it('should not break design', async () => {
    const dataHook = 'badge-variations';
    const element = byDataHook(dataHook);
    await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
    await scrollToElement(element);
  });
});
