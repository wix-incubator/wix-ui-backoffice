import {badgeDriverFactory} from 'wix-ui-core/dist/src/components/Badge/Badge.protractor.driver';

export const counterBadgeDriverFactory = (component) => {
  return {
    ...badgeDriverFactory(component)
  };
};
