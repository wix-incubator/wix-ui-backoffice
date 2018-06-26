import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {circularProgressBarTestkitFactory, CircularProgressBarDriver} from '../../testkit/protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import {enumValues} from '../../utils';
import {Size} from './constants';

describe('CircularProgressBar', () => {
  const storyUrl = getStoryUrl('Components', 'CircularProgressBar');
  let driver: CircularProgressBarDriver;

  beforeAll(async () => {
    await browser.get(storyUrl);
    driver = circularProgressBarTestkitFactory({dataHook: 'circular-progress-bar-story'});
    await waitForVisibilityOf(driver.element(), 'Cannot find CircularProgressBar');
  });

  afterEach(() => autoExampleDriver.reset());

  eyes.it('should exist', () => {
    expect(driver.element().isPresent()).toBe(true);
  });

  describe('sizes', () => {
    enumValues(Size).forEach(size => {
      eyes.it(`should render ${size} ProgressBar`, async () => {
        await autoExampleDriver.setProps({size})
        expect(driver.element().isPresent()).toBe(true);
        eyes.checkWindow(`size=${size}`);
      });
    });
  });

  describe('successIcon', () => {
    enumValues(Size).forEach(size => {
      eyes.it(`should render correct successIcon for ${size} ProgressBar`, async () => {
        await autoExampleDriver.setProps({size, value: 100, showProgressIndication: true})
        expect(driver.element().isPresent()).toBe(true);
        eyes.checkWindow(`successIcon ${size}`);
      });
    });
  });

  describe('errorIcon', () => {
    enumValues(Size).forEach(size => {
      eyes.it(`should render correct errorIcon for ${size} ProgressBar`, async () => {
        await autoExampleDriver.setProps({size, error: true, value: 40, showProgressIndication: true})
        expect(driver.element().isPresent()).toBe(true);
        eyes.checkWindow(`errorIcon ${size}`);

        browser
          .actions()
          .mouseMove(driver.element())
          .perform();

        await waitForVisibilityOf(driver.getTooltip(), 'Cannot find CircularProgressBar tooltip');
        eyes.checkWindow(`errorIcon tooltip ${size}`);
      });
    });
  });

  describe('light', () => {
    eyes.it(`should render light ProgressBar`, async () => {
      await autoExampleDriver.setProps({light: true, value: 70})
      expect(driver.element().isPresent()).toBe(true);
      eyes.checkWindow('light');

      await autoExampleDriver.setProps({light: true, error: true, value: 60})
      expect(driver.element().isPresent()).toBe(true);
      eyes.checkWindow('light with error');
    });
  });
});
