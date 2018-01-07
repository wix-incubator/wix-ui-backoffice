import * as eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils';
import {buttonTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';

describe('Button', () => {
  const storyUrl = getStoryUrl('Components', 'Button');
  const dataHook = 'storybook-button';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = buttonTestkitFactory({dataHook});

    expect(driver.element().isDisplayed()).toBe(true);
  });
});
