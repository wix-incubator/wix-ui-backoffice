import * as eyes from 'eyes.it';
import {$, browser} from 'protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {linearProgressBarTestkitFactory, LinearProgressBarDriver} from '../../testkit/protractor';
import {enumValues} from '../../utils';

describe('LinearProgressBar', () => {
  const storyUrl = getStoryUrl('Components', 'LinearProgressBar');
  let driver: LinearProgressBarDriver;

  beforeAll(async () => {
    await browser.get(storyUrl);
    driver = linearProgressBarTestkitFactory({dataHook: 'linear-progress-bar-story'});
    await waitForVisibilityOf(driver.element(), 'Cannot find LinearProgressBar');
  });

  afterEach(() => autoExampleDriver.reset());

  eyes.it('should exist', () => {
    expect(driver.element().isPresent()).toBe(true);
  });

  eyes.it('should render correct success state', async () => {
    await autoExampleDriver.setProps({value: 100, showProgressIndication: true});
    expect(driver.element().isPresent()).toBe(true);
  });

  eyes.it('should render correct error state', async () => {
    await autoExampleDriver.setProps({value: 30, showProgressIndication: true, error: true, errorMessage: 'Some error'});
    expect(driver.element().isPresent()).toBe(true);

    eyes.checkWindow('errorIcon');

    driver.showError();

    await waitForVisibilityOf($(`[data-hook="linear-progressbar-tooltip"]`), 'Cannot find CircularProgressBar tooltip');
  });

  eyes.it('should render correct light state', async () => {
    await autoExampleDriver.setProps({value: 20, light: true});
    expect(driver.element().isPresent()).toBe(true);

    eyes.checkWindow('light');

    await autoExampleDriver.setProps({value: 20, light: true, error: true});
    expect(driver.element().isPresent()).toBe(true);
  });
});
