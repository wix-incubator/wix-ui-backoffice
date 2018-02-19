import * as eyes from 'eyes.it';
import {getStoryUrl} from 'wix-ui-test-utils/protractor';
import {toggleSwitchTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';
import * as autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {browser} from 'protractor';

describe('ToggleSwitch', () => {
  const storyUrl = getStoryUrl('Components', 'ToggleSwitch');
  const toggleSwitchDriver = toggleSwitchTestkitFactory({dataHook: 'storybook-toggle-switch'});

  beforeAll(() => browser.get(storyUrl));
  afterEach(() => autoExampleDriver.reset());

  eyes.it('should react to `checked` prop', () => {
    autoExampleDriver.setProps({checked: true});
    expect(toggleSwitchDriver.isChecked()).toBe(true)

    autoExampleDriver.setProps({checked: false});
    expect(toggleSwitchDriver.isChecked()).toBe(false);
  });
});
