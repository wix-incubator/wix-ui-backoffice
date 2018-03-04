import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils/protractor';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.protractor.driver';
export const counterBadgeTestkitFactory = protractorTestkitFactoryCreator(counterBadgeDriverFactory);

import {badgeDriverFactory} from '../components/Badge/Badge.protractor.driver';
export const badgeTestkitFactory = protractorTestkitFactoryCreator(badgeDriverFactory);

import {headingDriverFactory} from '../components/Heading/Heading.protractor.driver';
export const headingTestkitFactory = protractorTestkitFactoryCreator(headingDriverFactory);

import {uiTextDriverFactory} from '../components/UIText/UIText.protractor.driver';
export const uiTextTestkitFactory = protractorTestkitFactoryCreator(uiTextDriverFactory);

import {autocompleteDriverFactory} from '../components/Autocomplete/Autocomplete.protractor.driver';
export const autocompleteTestkitFactory = protractorTestkitFactoryCreator(autocompleteDriverFactory);

import {counterBadgeDriverFactory as stylableCounterBadgeDriverFactory} from '../components/StylableCounterBadge/CounterBadge.protractor.driver';
export const stylableCounterBadgeTestkitFactory = protractorTestkitFactoryCreator(stylableCounterBadgeDriverFactory);
