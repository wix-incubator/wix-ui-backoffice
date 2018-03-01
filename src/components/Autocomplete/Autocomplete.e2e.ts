import * as eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils/protractor';
import {autocompleteTestkitFactory} from '../../testkit/protractor';
import {browser} from 'protractor';

describe('Autocomplete', () => {
  const storyUrl = getStoryUrl('Components', 'Autocomplete');
  const dataHook = 'storybook-autocomplete';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = autocompleteTestkitFactory({dataHook});

    expect(driver.element()).toBeDefined();
  });
});
