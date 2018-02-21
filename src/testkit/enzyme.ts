import {enzymeTestkitFactoryCreator} from 'wix-ui-test-utils/enzyme';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = enzymeTestkitFactoryCreator(counterBadgeDriverFactory);

import {checkboxDriverFactory} from '../components/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory = enzymeTestkitFactoryCreator(checkboxDriverFactory);
