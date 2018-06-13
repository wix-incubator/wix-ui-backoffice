import * as eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils/protractor';
import {inputTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';
import {browser} from 'protractor';

describe('Input', () => {
  const storyUrl = getStoryUrl('Components', 'Input');
  const dataHook = 'storybook-input';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = inputTestkitFactory({dataHook});

    expect(driver.element().isDisplayed()).toBe(true);
  }, {version: 'story with value'});
});
