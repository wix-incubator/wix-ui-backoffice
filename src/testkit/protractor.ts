import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.protractor.driver';
export const counterBadgeTestkitFactory = protractorTestkitFactoryCreator(counterBadgeDriverFactory);
