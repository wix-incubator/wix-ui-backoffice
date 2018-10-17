import {badgeDriverFactory} from 'wix-ui-core/dist/src/components/deprecated/Badge/Badge.driver';

export const counterBadgeDriverFactory = ({element}) => {
  return {
    ...badgeDriverFactory({element})
  };
};
