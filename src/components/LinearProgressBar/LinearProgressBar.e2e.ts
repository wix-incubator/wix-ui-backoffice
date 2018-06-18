import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {linearProgressBarTestkitFactory} from '../../testkit/protractor';

describe('LinearProgressBar', () => {
  const storyUrl = getStoryUrl('Components', 'LinearProgressBar');

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should exist', () => {
    const dataHook = 'progress-bar';
    const driver = linearProgressBarTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find LinearProgressBar')
      .then(() => expect(driver.element().isPresent()).toBe(true));
  });
});
