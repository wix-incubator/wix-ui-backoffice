import { enzymeTestkitFactoryCreator, WrapperData } from 'wix-ui-test-utils/enzyme';

import { badgeDriverFactory, BadgeDriver } from '../components/Badge/Badge.driver';
export const badgeTestkitFactory = enzymeTestkitFactoryCreator<BadgeDriver>(badgeDriverFactory);
export { BadgeDriver };

import { headingDriverFactory, HeadingDriver } from '../components/Heading/Heading.driver';
export const headingTestkitFactory = enzymeTestkitFactoryCreator<HeadingDriver>(headingDriverFactory);
export { HeadingDriver };

import { buttonDriverFactory, ButtonDriver } from '../components/Button/Button.driver';
export const buttonTestkitFactory = enzymeTestkitFactoryCreator(buttonDriverFactory);
export { ButtonDriver };

import { closeButtonDriverFactory, CloseButtonDriver } from '../components/CloseButton/CloseButton.driver';
export const closeButtonTestkitFactory = enzymeTestkitFactoryCreator<CloseButtonDriver>(closeButtonDriverFactory);
export { CloseButtonDriver };

import { checkboxDriverFactory } from '../components/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory = enzymeTestkitFactoryCreator(checkboxDriverFactory);

import { uiTextDriverFactory, UITextDriver } from '../components/StylableUIText/UIText.driver';
export const uiTextTestkitFactory = enzymeTestkitFactoryCreator<UITextDriver>(uiTextDriverFactory);
export { UITextDriver };

import {textDriverFactory, TextDriver} from '../components/Text/Text.driver';
export const textTestkitFactory = enzymeTestkitFactoryCreator<TextDriver>(textDriverFactory);
export {TextDriver};

import { autocompleteDriverFactory } from '../components/Autocomplete/Autocomplete.driver';
export const autocompleteTestkitFactory = enzymeTestkitFactoryCreator(autocompleteDriverFactory);

import { toggleSwitchDriverFactory } from '../components/ToggleSwitch/ToggleSwitch.driver';
export const toggleSwitchTestkitFactory = enzymeTestkitFactoryCreator(toggleSwitchDriverFactory);

import { counterBadgeDriverFactory as stylableCounterBadgeDriverFactory, CounterBadgeDriver } from '../components/StylableCounterBadge/CounterBadge.driver';
export const stylableCounterBadgeTestkitFactory = enzymeTestkitFactoryCreator<CounterBadgeDriver>(stylableCounterBadgeDriverFactory);
export { CounterBadgeDriver };

import { labelWithOptionsDriverFactory } from '../components/LabelWithOptions/LabelWithOptions.driver';
export const labelWithOptionsTestkitFactory = enzymeTestkitFactoryCreator(labelWithOptionsDriverFactory);

import { labelDriverFactory } from '../components/Label/Label.driver';
export const labelTestkitFactory = enzymeTestkitFactoryCreator(labelDriverFactory);

import { floatingHelperDriverFactory, FloatingHelperDriver } from '../components/FloatingHelper/FloatingHelper.driver';
export const floatingHelperTestkitFactory = enzymeTestkitFactoryCreator<FloatingHelperDriver>(floatingHelperDriverFactory);

import {thumbnailDriverFactory, ThumbnailDriver} from '../components/Thumbnail/Thumbnail.driver';
export const thumbnailTestkitFactory = enzymeTestkitFactoryCreator<ThumbnailDriver>(thumbnailDriverFactory);
export {ThumbnailDriver};