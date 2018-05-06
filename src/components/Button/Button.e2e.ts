import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import { getStoryUrl } from 'wix-ui-test-utils/protractor';
import { buttonTestkitFactory } from '../../testkit/protractor';
import { Skin, Size, Priority } from './constants';
import autoExampleDriver = require('wix-storybook-utils/AutoExampleDriver');
import { enumValues } from '../../utils';

describe('Button', () => {
  const storyUrl = getStoryUrl('Components', 'Button');
  const dataHook = 'storybook-button';

  beforeAll(() => browser.get(storyUrl));
  afterEach(() => autoExampleDriver.reset());

  eyes.it('should render with default props', async () => {
    const driver = buttonTestkitFactory({ dataHook });
    expect(await driver.element().isPresent()).toBeTruthy();
  });

  eyes.it('should render in all sizes', async () => {
    for (let size of enumValues(Size)) {
      await autoExampleDriver.setProps({ size })
      eyes.checkWindow(`size=${size}`);
    }
  });

  eyes.it('should render in all skins and priorities', async () => {
    for (let skin of enumValues(Skin)) {
      for (let priority of enumValues(Priority)) {
        await autoExampleDriver.setProps({ skin, priority });
        eyes.checkWindow(`[skin=${skin}, priority=${priority}`);
      }
    }
  });
});
