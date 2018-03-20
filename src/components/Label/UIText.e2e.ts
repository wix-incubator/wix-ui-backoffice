import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {uiLabelTestkitFactory} from '../../testkit/protractor';

describe('UILabel', () => {
  const storyUrl = getStoryUrl('Components', 'StylableUILabel');

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should display correct content', () => {
    const dataHook = 'storybook-uiLabel';
    const driver = uiLabelTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find UILabel')
      .then(() => expect(driver.getLabelContent()).toBe('Some label'));
  });
});
