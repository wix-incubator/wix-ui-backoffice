import {enzymeTestkitFactoryCreator} from 'wix-ui-test-utils/dist/src/testkit-helpers/enzyme';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = enzymeTestkitFactoryCreator(counterBadgeDriverFactory);
