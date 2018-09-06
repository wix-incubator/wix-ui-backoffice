import * as eyes from 'eyes.it';
import {$, browser} from 'protractor';
import {getStoryUrl, scrollToElement, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {badgeTestkitFactory} from '../../testkit/protractor';

const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);

async function verifyItem(dataHook) {
  const element = byDataHook(dataHook);
  await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
  await scrollToElement(element);
  await eyes.checkWindow(dataHook);
}

describe('Badge', () => {
  const storyUrl = getStoryUrl('Components', 'Badge');

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should display correct content', () => {
    const dataHook = 'storybook-badge';
    const driver = badgeTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find Badge')
      .then(() => expect(driver.text()).toBe('I\'M A BADGE!'));
  });

  eyes.it('should not break design', async () => {
    const dataHook = 'badge-variations';
    await verifyItem(dataHook);
  });
});
