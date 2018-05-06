import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import { counterBadgeDriverFactory } from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = testkitFactoryCreator(counterBadgeDriverFactory);

import { badgeDriverFactory, BadgeDriver } from '../components/Badge/Badge.driver';
export const badgeTestkitFactory = testkitFactoryCreator<BadgeDriver>(badgeDriverFactory);
export { BadgeDriver };

import { headingDriverFactory, HeadingDriver } from '../components/Heading/Heading.driver';
export const headingTestkitFactory = testkitFactoryCreator<HeadingDriver>(headingDriverFactory);
export { HeadingDriver };

import { buttonDriverFactory, ButtonDriver } from '../components/Button/Button.driver';
export const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);
export { ButtonDriver };

import { checkboxDriverFactory } from '../components/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory = testkitFactoryCreator(checkboxDriverFactory);

import { uiTextDriverFactory, UITextDriver } from '../components/StylableUIText/UIText.driver';
export const uiTextTestkitFactory = testkitFactoryCreator<UITextDriver>(uiTextDriverFactory);
export { UITextDriver };

import { textDriverFactory, TextDriver } from '../components/Text/Text.driver';
export const textTestkitFactory = testkitFactoryCreator<TextDriver>(textDriverFactory);
export { TextDriver };

import { autocompleteDriverFactory } from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory = testkitFactoryCreator(autocompleteDriverFactory);

import { toggleSwitchDriverFactory } from '../components/ToggleSwitch/ToggleSwitch.driver';
export const toggleSwitchTestkitFactory = testkitFactoryCreator(toggleSwitchDriverFactory);

import { counterBadgeDriverFactory as stylableCounterBadgeDriverFactory, CounterBadgeDriver } from '../components/StylableCounterBadge/CounterBadge.driver';
export const stylableCounterBadgeTestkitFactory = testkitFactoryCreator<CounterBadgeDriver>(stylableCounterBadgeDriverFactory);
export { CounterBadgeDriver };

import { labelWithOptionsDriverFactory } from '../components/LabelWithOptions/LabelWithOptions.driver';
export const labelWithOptionsTestkitFactory = testkitFactoryCreator(labelWithOptionsDriverFactory);

import { labelDriverFactory } from '../components/Label/Label.driver';
export const labelTestkitFactory = testkitFactoryCreator(labelDriverFactory);

import { floatingHelperDriverFactory, FloatingHelperDriver } from '../components/FloatingHelper/FloatingHelper.driver';
export const floatingHelperTestkitFactory = testkitFactoryCreator<FloatingHelperDriver>(floatingHelperDriverFactory);
