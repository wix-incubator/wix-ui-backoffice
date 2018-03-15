import * as eyes from 'eyes.it';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {addressInputTestkitFactory} from '../../testkit/protractor';
import {browser} from 'protractor';

describe('AddressInput', () => {
  const storyUrl = getStoryUrl('Components', 'AddressInput');
  const dataHook = 'storybook-address-input';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render addressInput', async () => {
    const driver = addressInputTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find AddressInput');
    expect(driver.element()).toBeDefined();
  });
});
