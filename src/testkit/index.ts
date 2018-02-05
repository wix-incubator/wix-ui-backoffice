import {testkitFactoryCreator} from 'wix-ui-test-utils/dist/src/testkit-helpers/vanilla';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = testkitFactoryCreator(counterBadgeDriverFactory);

import {checkboxDriverFactory} from '../components/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory = testkitFactoryCreator(checkboxDriverFactory);
