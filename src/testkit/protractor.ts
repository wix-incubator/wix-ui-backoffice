import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils/protractor';
import {ElementFinder} from 'protractor';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.protractor.driver';
export const counterBadgeTestkitFactory = protractorTestkitFactoryCreator(counterBadgeDriverFactory);

import {badgeDriverFactory} from '../components/Badge/Badge.protractor.driver';
export const badgeTestkitFactory = protractorTestkitFactoryCreator(badgeDriverFactory);

import {headingDriverFactory} from '../components/Heading/Heading.protractor.driver';
export const headingTestkitFactory = protractorTestkitFactoryCreator(headingDriverFactory);

import {uiTextDriverFactory} from '../components/StylableUIText/UIText.protractor.driver';
export const uiTextTestkitFactory = protractorTestkitFactoryCreator(uiTextDriverFactory);

import {textDriverFactory} from '../components/Text/Text.protractor.driver';
export const textTestkitFactory = protractorTestkitFactoryCreator(textDriverFactory);

import {autocompleteDriverFactory} from '../components/Autocomplete/Autocomplete.protractor.driver';
export const autocompleteTestkitFactory = protractorTestkitFactoryCreator(autocompleteDriverFactory);

import {toggleSwitchDriverFactory} from '../components/ToggleSwitch/ToggleSwitch.protractor.driver';
export const toggleSwitchTestkitFactory = protractorTestkitFactoryCreator(toggleSwitchDriverFactory);

import {counterBadgeDriverFactory as stylableCounterBadgeDriverFactory} from '../components/StylableCounterBadge/CounterBadge.protractor.driver';
export const stylableCounterBadgeTestkitFactory = protractorTestkitFactoryCreator(stylableCounterBadgeDriverFactory);

import {labelWithOptionsDriverFactory} from '../components/LabelWithOptions/LabelWithOptions.protractor.driver';
export const labelWithOptionsTestkitFactory = protractorTestkitFactoryCreator(labelWithOptionsDriverFactory);

import {labelDriverFactory} from '../components/Label/Label.protractor.driver';
export const labelTestkitFactory = protractorTestkitFactoryCreator(labelDriverFactory);

import {globalHelperDriverFactory} from '../components/GlobalHelper/GlobalHelper.protractor.driver';
export const globalHelperTestkitFactory = protractorTestkitFactoryCreator(globalHelperDriverFactory);
