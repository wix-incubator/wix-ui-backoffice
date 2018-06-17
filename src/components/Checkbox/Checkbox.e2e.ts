import * as eyes from 'eyes.it';
import {getStoryUrl, scrollToElement, mouseLeave} from 'wix-ui-test-utils/protractor';
import {checkboxTestkitFactory} from 'wix-ui-core/dist/src/testkit/protractor';
import {browser} from 'protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');

describe('Checkbox', () => {
  const storyUrl = getStoryUrl('Components', 'Checkbox');
  const dataHook = 'storybook-checkbox';

  beforeEach(() => browser.get(storyUrl));
  afterEach(async () => {
    await autoExampleDriver.reset();
  });

  describe('not hovered', () => {
    eyes.it('should be unchecked', () => {
      const driver = checkboxTestkitFactory({dataHook});
      expect(driver.isChecked()).toBeFalsy();
    });
    
    eyes.it('should be checked', async () => {
      autoExampleDriver.setProps({checked: true});
      const driver = checkboxTestkitFactory({dataHook});
      await mouseLeave()
      expect(await driver.isChecked()).toBeTruthy();
    });
    
    eyes.it('should be indetermined', async () => {
      autoExampleDriver.setProps({indeterminate: true});
      const driver = checkboxTestkitFactory({dataHook});
      await mouseLeave();
      // TODO: implement driver.isIndeterminate() in wix-ui-core
      // expect(await driver.isIndeterminate()).toBeTruthy();
    });

    eyes.it('should display checked icon in place. not be affected by text-align', async () => {
      const driver = checkboxTestkitFactory({dataHook: 'storybook-checkbox-text-align'});
      await scrollToElement(driver.element());
      await mouseLeave()
      expect(await driver.isChecked()).toBeTruthy();
    });
  });


  it('should be unchecked and not disabled by default', async () => {
    const driver = checkboxTestkitFactory({dataHook});
    expect(await driver.isChecked()).toBe(false);
    expect(await driver.isDisabled()).toBe(false);
  });

  it('should be checked when clicked', async () => {
    const driver = checkboxTestkitFactory({dataHook});
    expect(await driver.isChecked()).toBe(false);
    await driver.click();
    expect(await driver.isChecked()).toBe(true);
  });
});
