import * as eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils';
import {inputTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';
import {browser} from 'protractor';

xdescribe('Input', () => {
  const storyUrl = getStoryUrl('Components', 'Input');
  const dataHook = 'storybook-input';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = inputTestkitFactory({dataHook});

    expect(driver.element().isDisplayed()).toBe(true);
  });
});
