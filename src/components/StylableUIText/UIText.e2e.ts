import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {uiTextTestkitFactory} from '../../testkit/protractor';

describe('UIText', () => {
  const storyUrl = getStoryUrl('Internal', 'UIText');

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should display correct content', () => {
    const dataHook = 'storybook-uiText';
    const driver = uiTextTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find UIText')
      .then(() => expect(driver.getText()).toBe('Some text'));
  });
});
