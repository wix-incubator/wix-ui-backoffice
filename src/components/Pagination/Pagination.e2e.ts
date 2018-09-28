import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import { createStoryUrl } from 'wix-ui-test-utils/protractor';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');

import { storySettings } from './../../../stories/Pagination/storySettings';
import { paginationTestkitFactory } from '../../testkit/protractor';

describe('Pagination', () => {
  const storyUrl = createStoryUrl({ kind: storySettings.kind, story: storySettings.story });
  const dataHook = 'storybook-pagination';

  beforeAll(() => browser.get(storyUrl));
  afterEach(() => autoExampleDriver.remount());

  eyes.it('should render with default props', async () => {
    const driver = paginationTestkitFactory({ dataHook });
    expect(await driver.element().isPresent()).toBeTruthy();
    browser.sleep(100000);
  });
});
