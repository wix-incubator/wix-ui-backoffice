import * as eyes from 'eyes.it';
import { browser } from 'protractor';
import { waitForVisibilityOf, createStoryUrl } from 'wix-ui-test-utils/protractor';
import { fullTextViewTestkitFactory } from '../../testkit/protractor';

describe('FullTextView', () => {
  const dataHook = 'storybook-fullTextView';
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'FullTextView'
  });

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render with default props', async () => {
    const driver = fullTextViewTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element());
    expect(await driver.element().isPresent()).toBeTruthy();
  });
});
