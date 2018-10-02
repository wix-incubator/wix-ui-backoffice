import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import { waitForVisibilityOf, createStoryUrl } from 'wix-ui-test-utils/protractor';
import { enumValues } from '../../utils';
import { closeButtonTestkitFactory } from '../../testkit/protractor';
import { storySettings } from '../../../stories/CloseButton/storySettings';
import {Skin, Size} from './constants';

describe('CloseButton', () => {
  const storyUrl = createStoryUrl(storySettings);
  const dataHook = 'storybook-close-button';

  beforeAll(() => browser.get(storyUrl));

  eyes.it('should render all skins', async () => {
    const driver = closeButtonTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element());
    for (let skin in enumValues(Skin)) {
      await eyes.checkWindow(`skin=${skin}`);
    }
  });

});
