import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl} from 'wix-ui-test-utils/protractor';
import {closeButtonTestkitFactory} from '../../testkit/protractor';

describe('CloseButton', () => {
  const storyUrl = getStoryUrl('Components', 'CloseButton');
  const dataHook = 'storybook-close-button';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render with default props', async () => {
    const driver = closeButtonTestkitFactory({dataHook});
    expect(await driver.element().isPresent()).toBeTruthy();
  });

});
