import {badgeDriverFactory} from 'wix-ui-core/dist/src/components/Badge/Badge.driver';

export const counterBadgeDriverFactory = ({element}) => {
  return {
    ...badgeDriverFactory({element})
  };
};
