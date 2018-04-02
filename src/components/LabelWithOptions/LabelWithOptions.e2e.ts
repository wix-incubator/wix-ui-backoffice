import * as eyes from 'eyes.it';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {labelWithOptionsTestkitFactory} from '../../testkit/protractor';
import {browser} from 'protractor';

describe('LabelWithOptions', () => {
  const storyUrl = getStoryUrl('Components', 'LabelWithOptions');
  const dataHook = 'storybook-labelwithoptions';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render LabelWithOptions', async () => {
    const driver = labelWithOptionsTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find LabelWithOptions');
    expect(driver.element()).toBeDefined();
  });
});
