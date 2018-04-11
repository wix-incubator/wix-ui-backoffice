import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {headingTestkitFactory} from '../../testkit/protractor';

describe('Heading', () => {
  const storyUrl = getStoryUrl('Components', 'Heading');

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should display correct content', () => {
    const dataHook = 'storybook-heading';
    const driver = headingTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find Heading')
      .then(() => expect(driver.getText()).toBe('Some text'));
  });
});
