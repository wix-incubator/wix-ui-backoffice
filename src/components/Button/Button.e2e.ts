import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {getStoryUrl} from 'wix-ui-test-utils/protractor';
import {buttonTestkitFactory} from '../../testkit/protractor';

describe('Button', () => {
  const storyUrl = getStoryUrl('Components', 'Button');
  const dataHook = 'storybook-button';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render with default props', async () => {
    const driver = buttonTestkitFactory({dataHook});
    expect(await driver.element().isPresent()).toBeTruthy();
  });

});
