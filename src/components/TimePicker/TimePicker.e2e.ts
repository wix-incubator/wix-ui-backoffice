import * as eyes from 'eyes.it';
import {$, browser, by} from 'protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {timePickerTestkitFactory} from '../../testkit/protractor';

fdescribe('TimePicker', () => {
  const storyUrl = getStoryUrl('Components', 'AddressInput');
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

});
