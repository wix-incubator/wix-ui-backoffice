import { enzymeTestkitFactoryCreator, WrapperData } from 'wix-ui-test-utils/enzyme';

import { counterBadgeDriverFactory } from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = enzymeTestkitFactoryCreator(counterBadgeDriverFactory);

import { badgeDriverFactory, BadgeDriver } from '../components/Badge/Badge.driver';
export const badgeTestkitFactory = enzymeTestkitFactoryCreator<BadgeDriver>(badgeDriverFactory);
export { BadgeDriver };

import { linearProgressBarDriverFactory, LinearProgressBarDriver } from '../components/LinearProgressBar/LinearProgressBar.driver';
export const linearProgressBarTestkitFactory = enzymeTestkitFactoryCreator<LinearProgressBarDriver>(linearProgressBarDriverFactory);
export { LinearProgressBarDriver };

import { circularProgressBarDriverFactory, CircularProgressBarDriver } from '../components/CircularProgressBar/CircularProgressBar.driver';
export const circularProgressBarTestkitFactory = enzymeTestkitFactoryCreator<CircularProgressBarDriver>(circularProgressBarDriverFactory);
export { CircularProgressBarDriver };

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

import { textDriverFactory as coreTextDriverFactory, TextDriver as CoreTextDriver } from '../components/core/CoreText/Text.driver';
export const coreTextTestkitFactory = enzymeTestkitFactoryCreator<CoreTextDriver>(coreTextDriverFactory);
export { CoreTextDriver };

import { uiTextDriverFactory, UITextDriver } from '../components/StylableUIText/UIText.driver';
export const uiTextTestkitFactory = enzymeTestkitFactoryCreator<UITextDriver>(uiTextDriverFactory);
export { UITextDriver };

import {textDriverFactory, TextDriver} from '../components/Text/Text.driver';
export const textTestkitFactory = enzymeTestkitFactoryCreator<TextDriver>(textDriverFactory);
export {TextDriver};

import { fullTextViewDriverFactory, FullTextViewDriver } from '../components/FullTextView/FullTextView.driver';
export const fullTextViewTestkitFactory = enzymeTestkitFactoryCreator<FullTextViewDriver>(fullTextViewDriverFactory);
export { FullTextViewDriver };

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
export {FloatingHelperDriver}

import {thumbnailDriverFactory, ThumbnailDriver} from '../components/Thumbnail/Thumbnail.driver';
export const thumbnailTestkitFactory = enzymeTestkitFactoryCreator<ThumbnailDriver>(thumbnailDriverFactory);
export {ThumbnailDriver};

import { addressInputDriverFactory } from '../components/AddressInput/AddressInput.driver';
export const addressInputTestkitFactory = enzymeTestkitFactoryCreator(addressInputDriverFactory);

import { timePickerDriverFactory } from '../components/TimePicker/TimePicker.driver';
export const timePickerTestkitFactory = enzymeTestkitFactoryCreator(timePickerDriverFactory);
