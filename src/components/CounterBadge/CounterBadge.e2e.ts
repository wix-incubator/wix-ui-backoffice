import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import * as autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {counterBadgeTestkitFactory} from '../../testkit/protractor';

describe('CounterBadge', () => {
  const storyUrl = getStoryUrl('Components', 'CounterBadge');

  beforeEach(() => browser.get(storyUrl));
  afterEach(() => autoExampleDriver.reset());

  eyes.it('should display correct content', async () => {
    const driver = counterBadgeTestkitFactory({dataHook: 'storybook-counterBadge'});
    await waitForVisibilityOf(driver.element(), 'Cannot find CounterBadge');
    // await autoExampleDriver.setProps({children: '34'});
    expect(await driver.getTextContent()).toBe('12');
  });
});
