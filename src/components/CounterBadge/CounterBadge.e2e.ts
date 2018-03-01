import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import * as autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {counterBadgeTestkitFactory} from '../../testkit/protractor';

describe('CounterBadge', () => {
  const storyUrl = getStoryUrl('Components', 'CounterBadge');

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should display correct content', () => {
    const dataHook = 'storybook-counterBadge';
    const driver = counterBadgeTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find CounterBadge')
      .then(() => expect(driver.text()).toBe('12'));
  });
});
