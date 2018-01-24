import {testkitFactoryCreator} from 'wix-ui-test-utils/dist/src/testkit-helpers/vanilla';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = testkitFactoryCreator(counterBadgeDriverFactory);
