import * as eyes from 'eyes.it';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {labelWithOptionsTestkitFactory} from '../../testkit/protractor';
import {browser} from 'protractor';

describe('MultiSelect', () => {
  const storyUrl = getStoryUrl('Components', 'MultiSelect');
  const dataHook = 'storybook-multiselect';

  beforeEach(() => browser.get(storyUrl));

  eyes.fit('should render MultiSelect', async () => {
    const driver = labelWithOptionsTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find MultiSelect');
    expect(await driver.isCheckboxModeOn()).toBeTruthy();
  });
});
