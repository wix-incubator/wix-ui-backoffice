import {isFocused} from 'wix-ui-test-utils/protractor';
import {BaseDriver, DriverFactory} from 'wix-ui-core/dist/src/common/BaseDriver.protractor';

export interface BadgeDriver extends BaseDriver {
  text: () => Promise<string>;
  hasFocusState: () => Promise<boolean>;
}

export const badgeDriverFactory: DriverFactory<BadgeDriver> = component => ({
  /** returns the component element */
  element: () => component,
  /** returns the component text */
  text: async () => component.getText(),
  /** return `true` if the element is focused */
  hasFocusState: async () => isFocused(component)
});
