import eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils';
import {toggleSwitchTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';

describe('ToggleSwitch', () => {
  const storyUrl = getStoryUrl('Components', 'ToggleSwitch');
  const dataHook = 'storybook-toggle-switch';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render', () => {
    const driver = toggleSwitchTestkitFactory({dataHook});

    expect(driver.element().isDisplayed()).toBe(true);
  });
});
