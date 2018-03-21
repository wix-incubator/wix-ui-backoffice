import {testkitFactoryCreator} from 'wix-ui-test-utils/vanilla';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = testkitFactoryCreator(counterBadgeDriverFactory);

import {badgeDriverFactory} from '../components/Badge/Badge.driver';
export const badgeTestkitFactory = testkitFactoryCreator(badgeDriverFactory);

import {headingDriverFactory} from '../components/Heading/Heading.driver';
export const headingTestkitFactory = testkitFactoryCreator(headingDriverFactory);

import {checkboxDriverFactory} from '../components/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory = testkitFactoryCreator(checkboxDriverFactory);

import {uiTextDriverFactory} from '../components/StylableUIText/UIText.driver';
export const uiTextTestkitFactory = testkitFactoryCreator(uiTextDriverFactory);

import {autocompleteDriverFactory} from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory = testkitFactoryCreator(autocompleteDriverFactory);

import {toggleSwitchDriverFactory} from '../components/ToggleSwitch/ToggleSwitch.driver';
export const toggleSwitchTestkitFactory = testkitFactoryCreator(toggleSwitchDriverFactory);

import {counterBadgeDriverFactory as stylableCounterBadgeDriverFactory} from '../components/StylableCounterBadge/CounterBadge.driver';
export const stylableCounterBadgeTestkitFactory = testkitFactoryCreator(stylableCounterBadgeDriverFactory);

import {addressInputDriverFactory} from '../components/AddressInput/AddressInput.driver';
export const addressInputTestkitFactory = testkitFactoryCreator(addressInputDriverFactory);
