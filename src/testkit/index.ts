import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import { counterBadgeDriverFactory } from '../components/CounterBadge/CounterBadge.driver';
export const counterBadgeTestkitFactory = testkitFactoryCreator(counterBadgeDriverFactory);

import { badgeDriverFactory, BadgeDriver } from '../components/Badge/Badge.driver';
export const badgeTestkitFactory = testkitFactoryCreator<BadgeDriver>(badgeDriverFactory);
export { BadgeDriver };

import { linearProgressBarDriverFactory, LinearProgressBarDriver } from '../components/LinearProgressBar/LinearProgressBar.driver';
export const linearProgressBarTestkitFactory = testkitFactoryCreator<LinearProgressBarDriver>(linearProgressBarDriverFactory);
export { LinearProgressBarDriver };

import { circularProgressBarDriverFactory, CircularProgressBarDriver } from '../components/CircularProgressBar/CircularProgressBar.driver';
export const circularProgressBarTestkitFactory = testkitFactoryCreator<CircularProgressBarDriver>(circularProgressBarDriverFactory);
export { CircularProgressBarDriver };

import { headingDriverFactory, HeadingDriver } from '../components/Heading/Heading.driver';
export const headingTestkitFactory = testkitFactoryCreator<HeadingDriver>(headingDriverFactory);
export { HeadingDriver };

import { buttonDriverFactory, ButtonDriver } from '../components/Button/Button.driver';
export const buttonTestkitFactory = testkitFactoryCreator(buttonDriverFactory);
export { ButtonDriver };

import { closeButtonDriverFactory, CloseButtonDriver } from '../components/CloseButton/CloseButton.driver';
export const closeButtonTestkitFactory = testkitFactoryCreator<CloseButtonDriver>(closeButtonDriverFactory);
export { CloseButtonDriver };

import { checkboxDriverFactory } from '../components/Checkbox/Checkbox.driver';
export const checkboxTestkitFactory = testkitFactoryCreator(checkboxDriverFactory);

import { textDriverFactory as coreTextDriverFactory, TextDriver as CoreTextDriver } from '../components/core/CoreText/Text.driver';
export const coreTextTestkitFactory = testkitFactoryCreator<CoreTextDriver>(coreTextDriverFactory);
export { CoreTextDriver };

import { uiTextDriverFactory, UITextDriver } from '../components/StylableUIText/UIText.driver';
export const uiTextTestkitFactory = testkitFactoryCreator<UITextDriver>(uiTextDriverFactory);
export { UITextDriver };

import {textDriverFactory, TextDriver} from '../components/Text/Text.driver';
export const textTestkitFactory = testkitFactoryCreator<TextDriver>(textDriverFactory);
export {TextDriver};

import { fullTextViewDriverFactory, FullTextViewDriver } from '../components/FullTextView/FullTextView.driver';
export const fullTextViewTestkitFactory = testkitFactoryCreator<FullTextViewDriver>(fullTextViewDriverFactory);
export { FullTextViewDriver };

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
export {FloatingHelperDriver};

import {thumbnailDriverFactory, ThumbnailDriver} from '../components/Thumbnail/Thumbnail.driver';
export const thumbnailTestkitFactory = testkitFactoryCreator<ThumbnailDriver>(thumbnailDriverFactory);
export {ThumbnailDriver};

import {addressInputDriverFactory} from '../components/AddressInput/AddressInput.driver';
export const addressInputTestkitFactory = testkitFactoryCreator(addressInputDriverFactory);

import { timePickerDriverFactory } from '../components/TimePicker/TimePicker.driver';
export const timePickerTestkitFactory = testkitFactoryCreator(timePickerDriverFactory);
