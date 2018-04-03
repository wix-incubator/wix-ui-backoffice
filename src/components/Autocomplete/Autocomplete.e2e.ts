import * as eyes from 'eyes.it';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {autocompleteTestkitFactory} from '../../testkit/protractor';
import {browser} from 'protractor';

describe('Autocomplete', () => {
  const storyUrl = getStoryUrl('Components', 'Autocomplete');
  const dataHook = 'storybook-autocomplete';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render autocomplete', async () => {
    const driver = autocompleteTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Autocomplete');
    expect(driver.element()).toBeDefined();
  });
});
