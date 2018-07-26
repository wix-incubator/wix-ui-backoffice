import * as eyes from 'eyes.it';
import {browser} from 'protractor';
import {createStoryUrl, mouseLeave, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {TimePickerDriver, timePickerTestkitFactory} from '../../testkit/protractor';
import * as autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

async function checkFocusAndHoverStates(driver: TimePickerDriver, contextState?: string) {
  // 1.
  await driver.blur();
  await eyes.checkWindow(`Non-focused, non-hovered. ${contextState}`);

  // 2.
  await driver.mouseEnter();
  await eyes.checkWindow(`Non-focused, hovered. ${contextState}`);

  // 3.
  await driver.focus();
  await eyes.checkWindow(`Focused, hovered. ${contextState}`);

  // 4.
  await driver.blur();
  await mouseLeave();
  await eyes.checkWindow(`Focused, non-hovered. ${contextState}`);
}

describe('TimePicker', () => {
  const storyUrl = createStoryUrl({
    kind: 'Components',
    story: 'TimePicker',
    withExamples: false
  });
  const dataHook = 'storybook-timePicker';
  const defaultValue = '13:00';

  beforeEach(() => browser.get(storyUrl));

  eyes.it('should render with default props', async () => {
    const driver = timePickerTestkitFactory({dataHook});
    await autoExampleDriver.setProps({value: '12:43'});
    return waitForVisibilityOf(driver.element(), 'Cannot find TimePicker');
  });

  eyes.it('should render in all sizes', async () => {
    for (let size of ['large', 'medium', 'small']) {
      await autoExampleDriver.setProps({defaultValue, size});
      await eyes.checkWindow(`size=${size}`);
    }
  });

  eyes.it('should render hover and focus states for different "error" values', async () => {
    const driver = timePickerTestkitFactory({dataHook});

    for (let error of [true, false]) {
      await autoExampleDriver.setProps({defaultValue, error});
      await checkFocusAndHoverStates(driver, `props.error=${error}`);
    }
  });

  eyes.it('should render hover and focus states for different "disabled" values', async () => {
    const driver = timePickerTestkitFactory({dataHook});

    for (let disabled of [true, false]) {
      await autoExampleDriver.setProps({defaultValue, disabled});
      await checkFocusAndHoverStates(driver, `props.disabled=${disabled}`);
    }
  });

  eyes.it('should select minutes on right arrow key down', async () => {
    const driver = timePickerTestkitFactory({dataHook});
    await autoExampleDriver.setProps({defaultValue});

    await driver.focus();
    await driver.pressKeyArrowRight();

    await eyes.checkWindow('pressKeyArrowRight');
  });
});
