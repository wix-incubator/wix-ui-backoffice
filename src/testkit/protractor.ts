import {FloatingHelperDriver} from './../../storybook-static/src/components/FloatingHelper/FloatingHelper.driver.d';
import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils/protractor';
import {ElementFinder} from 'protractor';

import {counterBadgeDriverFactory, CounterBadgeDriver} from '../components/CounterBadge/CounterBadge.protractor.driver';
export const counterBadgeTestkitFactory = protractorTestkitFactoryCreator<CounterBadgeDriver>(counterBadgeDriverFactory);
export {CounterBadgeDriver};

import {badgeDriverFactory, BadgeDriver} from '../components/Badge/Badge.protractor.driver';
export const badgeTestkitFactory = protractorTestkitFactoryCreator<BadgeDriver>(badgeDriverFactory);
export {BadgeDriver};

import {headingDriverFactory, HeadingDriver} from '../components/Heading/Heading.protractor.driver';
export const headingTestkitFactory = protractorTestkitFactoryCreator<HeadingDriver>(headingDriverFactory);
export {HeadingDriver};

import {uiTextDriverFactory, UITextDriver} from '../components/StylableUIText/UIText.protractor.driver';
export const uiTextTestkitFactory = protractorTestkitFactoryCreator<UITextDriver>(uiTextDriverFactory);
export {UITextDriver};

import {textDriverFactory, TextDriver} from '../components/Text/Text.protractor.driver';
export const textTestkitFactory = protractorTestkitFactoryCreator<TextDriver>(textDriverFactory);
export {TextDriver};

import {autocompleteDriverFactory, AutocompleteDriver} from '../components/Autocomplete/Autocomplete.protractor.driver';
export const autocompleteTestkitFactory = protractorTestkitFactoryCreator<AutocompleteDriver>(autocompleteDriverFactory);
export {AutocompleteDriver};

import {toggleSwitchDriverFactory, ToggleSwitchDriver} from '../components/ToggleSwitch/ToggleSwitch.protractor.driver';
export const toggleSwitchTestkitFactory = protractorTestkitFactoryCreator<ToggleSwitchDriver>(toggleSwitchDriverFactory);
export {ToggleSwitchDriver};

import {counterBadgeDriverFactory as stylableCounterBadgeDriverFactory, BadgeDriver as StylableCounterBadgeDriver} from '../components/StylableCounterBadge/CounterBadge.protractor.driver';
export const stylableCounterBadgeTestkitFactory = protractorTestkitFactoryCreator<StylableCounterBadgeDriver>(stylableCounterBadgeDriverFactory);
export {StylableCounterBadgeDriver};

import {labelWithOptionsDriverFactory, LabelWithOptionsDriver} from '../components/LabelWithOptions/LabelWithOptions.protractor.driver';
export const labelWithOptionsTestkitFactory = protractorTestkitFactoryCreator<LabelWithOptionsDriver>(labelWithOptionsDriverFactory);
export {LabelWithOptionsDriver};

import {labelDriverFactory, LabelDriver} from '../components/Label/Label.protractor.driver';
export const labelTestkitFactory = protractorTestkitFactoryCreator<LabelDriver>(labelDriverFactory);
export {LabelDriver};

import {globalHelperDriverFactory, GlobalHelperDriver} from '../components/GlobalHelper/GlobalHelper.protractor.driver';
export const globalHelperTestkitFactory = protractorTestkitFactoryCreator<GlobalHelperDriver>(globalHelperDriverFactory);
