import * as eyes from 'eyes.it';
import {$, browser, by} from 'protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {timePickerTestkitFactory} from '../../testkit/protractor';

describe('TimePicker', () => {
  const storyUrl = getStoryUrl('Components', 'TimePicker');
  let driver;

  beforeAll(async () => {
    await browser.get(storyUrl);
    driver = timePickerTestkitFactory({ dataHook: 'storybook-timepicker' });
    await waitForVisibilityOf(driver.element(), 'Cannot find TimePicker');
  });

  afterEach(() => autoExampleDriver.reset());

  eyes.it('should exist', () => {
    expect(driver.element().isPresent()).toBe(true);
  });

  eyes.it('should display the disabled state', async () => {
    autoExampleDriver.setProps({ disabled: true });
    const element = await driver.element();
    const input = await element.element(by.css('input'));
    const isDisabled = await input.getAttribute('disabled');
    expect(isDisabled).toBeTruthy();
  });

  it('should display the error state', async () => {
    autoExampleDriver.setProps({ error: true });
    eyes.checkWindow('Error state');
  });

});
