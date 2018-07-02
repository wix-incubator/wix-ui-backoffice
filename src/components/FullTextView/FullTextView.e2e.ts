import {getStoryUrl} from 'wix-ui-test-utils/protractor';
import {browser} from 'protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');

describe('FullTextView', () => {
  const storyUrl = getStoryUrl('Components', 'FullTextView');
  const dataHook = 'storybook-checkbox';

  beforeAll(() => browser.get(storyUrl));
  afterEach(async () => {
    await autoExampleDriver.reset();
  });
});
