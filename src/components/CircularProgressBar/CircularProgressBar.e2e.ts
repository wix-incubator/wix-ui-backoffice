import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {circularProgressBarTestkitFactory} from '../../testkit/protractor';

describe('CircularProgressBar', () => {
  const storyUrl = getStoryUrl('Components', 'CircularProgressBar');
 
  beforeEach(() => browser.get(storyUrl));

  eyes.it('should exist', () => {
    const dataHook = 'circular-progress-bar';
    const driver = circularProgressBarTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find CircularProgressBar')
      .then(() => expect(driver.element().isPresent()).toBe(true));
  });
});
