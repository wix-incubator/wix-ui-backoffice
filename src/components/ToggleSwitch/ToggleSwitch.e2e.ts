import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {toggleSwitchTestkitFactory} from '../../testkit/protractor';
import {protractor} from 'protractor';

describe('ToggleSwitch', () => {
  const storyUrl = getStoryUrl('Components', 'ToggleSwitch');
  const dataHook = 'storybook-toggleSwitch';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should toggle', () => {
    const driver = toggleSwitchTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find ToggleSwitch')
    .then(() => {
      expect(driver.checked()).toBeFalsy();

      driver.click();
      expect(driver.checked()).toBeTruthy();

      driver.click();
      expect(driver.checked()).toBeFalsy();
    });
  });

  eyes.it('should support accessiblility features', () => {
    const driver = toggleSwitchTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find ToggleSwitch')
    .then(() => {
      browser
        .actions()
        .mouseMove(driver.element())
        .mouseMove({x: 0, y: -20})
        .mouseDown()
        .mouseUp()
        .sendKeys(protractor.Key.TAB)
        .sendKeys(protractor.Key.SPACE)
        .perform();

      expect(driver.checked()).toBe(true);

      browser.actions().sendKeys(protractor.Key.SPACE).perform();
      expect(driver.checked()).toBe(false);
    });
  });
});
