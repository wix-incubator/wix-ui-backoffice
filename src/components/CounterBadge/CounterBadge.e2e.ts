import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils';
import * as autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {counterBadgeTestkitFactory} from '../../testkit/protractor';

describe('CounterBadge', () => {
  const storyUrl = getStoryUrl('Components', 'CounterBadge');

  beforeEach(() => browser.get(storyUrl));
  afterEach(() => autoExampleDriver.reset());

  eyes.it('should display correct content', async () => {
    const driver = counterBadgeTestkitFactory({dataHook: 'storybook-counterBadge'});
    // await browser.wait(ExpectedConditions.visibilityOf(driver.element()), 10000, 'Cannot find CounterBadge');
    // expect(await driver.getTextContent()).toBe('12');

    await waitForVisibilityOf(driver.element(), 'Cannot find Badge');
    await autoExampleDriver.setProps({children: () => '34'});
    await wait(5000);
    expect(await driver.getTextContent()).toBe('34');
  });
});


function wait (time) {
  return new Promise(fulfill => {
    setTimeout(() => fulfill() ,time);
  });
}
