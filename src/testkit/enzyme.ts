import {enzymeTestkitFactoryCreator, WrapperData} from 'wix-ui-test-utils/enzyme';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = enzymeTestkitFactoryCreator(counterBadgeDriverFactory);

import {badgeDriverFactory} from '../components/Badge/Badge.driver';
export const badgeTestkitFactory = enzymeTestkitFactoryCreator(badgeDriverFactory);

import {headingDriverFactory} from '../components/Heading/Heading.driver';
export const headingTestkitFactory = enzymeTestkitFactoryCreator(headingDriverFactory);

import {checkboxDriverFactory} from '../components/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory = enzymeTestkitFactoryCreator(checkboxDriverFactory);

import {uiTextDriverFactory} from '../components/StylableUIText/UIText.driver';
export const uiTextTestkitFactory = enzymeTestkitFactoryCreator(uiTextDriverFactory);

import {textDriverFactory} from '../components/Text/Text.driver';
export const textTestkitFactory = enzymeTestkitFactoryCreator(textDriverFactory);

import {autocompleteDriverFactory} from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory = enzymeTestkitFactoryCreator(autocompleteDriverFactory);

import {toggleSwitchDriverFactory} from '../components/ToggleSwitch/ToggleSwitch.driver';
export const toggleSwitchTestkitFactory = enzymeTestkitFactoryCreator(toggleSwitchDriverFactory);

import {counterBadgeDriverFactory as stylableCounterBadgeDriverFactory} from '../components/StylableCounterBadge/CounterBadge.driver';
export const stylableCounterBadgeTestkitFactory = enzymeTestkitFactoryCreator(stylableCounterBadgeDriverFactory);
