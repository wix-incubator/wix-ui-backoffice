import * as eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils';
import {checkboxTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';
import {browser} from 'protractor';

describe('Checkbox', () => {
  const storyUrl = getStoryUrl('Components', 'Checkbox');
  const dataHook = 'storybook-checkbox';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = checkboxTestkitFactory({dataHook});

    expect(driver.element()).toBeDefined();
  });
});
