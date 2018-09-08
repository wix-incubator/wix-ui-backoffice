import * as eyes from 'eyes.it';
import {$, browser} from 'protractor';
import {getStoryUrl, scrollToElement, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {badgeTestkitFactory} from '../../testkit/protractor';

const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);

describe('Badge', () => {
  const storyUrl = getStoryUrl('Components', 'Badge');

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should display correct content', async () => {
    const driver = badgeTestkitFactory({dataHook: 'storybook-badge'});
    await waitForVisibilityOf(driver.element(), 'Cannot find Badge');
    expect(await driver.text()).toBe('I\'M A BADGE!');
  });

  eyes.it('should not break design', async () => {
    const dataHook = 'badge-variations';
    const element = byDataHook(dataHook);
    await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
    await scrollToElement(element);
  });
});
