import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import { waitForVisibilityOf, createStoryUrl } from 'wix-ui-test-utils/protractor';
import { closeButtonTestkitFactory } from '../../testkit/protractor';
import { storySettings } from '../../../stories/CloseButton/storySettings';

describe('CloseButton', () => {
  const storyUrl = createStoryUrl(storySettings);
  const dataHook = 'storybook-close-button';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render with default props', async () => {
    const driver = closeButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element());
    expect(await driver.element().isPresent()).toBeTruthy();
  });

});
