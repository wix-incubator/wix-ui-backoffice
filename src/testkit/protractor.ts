import { protractorTestkitFactoryCreator } from 'wix-ui-test-utils/protractor';

import { counterBadgeDriverFactory, CounterBadgeDriver } from '../components/CounterBadge/CounterBadge.protractor.driver';
export const counterBadgeTestkitFactory = protractorTestkitFactoryCreator<CounterBadgeDriver>(counterBadgeDriverFactory);
export { CounterBadgeDriver };

import { buttonDriverFactory, ButtonDriver } from '../components/Button/Button.protractor.driver';
export const buttonTestkitFactory = protractorTestkitFactoryCreator<ButtonDriver>(buttonDriverFactory);
export { ButtonDriver };

import { closeButtonDriverFactory, CloseButtonDriver } from '../components/CloseButton/CloseButton.protractor.driver';
export const closeButtonTestkitFactory = protractorTestkitFactoryCreator<CloseButtonDriver>(closeButtonDriverFactory);
export { CloseButtonDriver };

import { badgeDriverFactory, BadgeDriver } from '../components/Badge/Badge.protractor.driver';
export const badgeTestkitFactory = protractorTestkitFactoryCreator<BadgeDriver>(badgeDriverFactory);
export { BadgeDriver };

import { headingDriverFactory, HeadingDriver } from '../components/Heading/Heading.protractor.driver';
export const headingTestkitFactory = protractorTestkitFactoryCreator<HeadingDriver>(headingDriverFactory);
export { HeadingDriver };

import { uiTextDriverFactory, UITextDriver } from '../components/StylableUIText/UIText.protractor.driver';
export const uiTextTestkitFactory = protractorTestkitFactoryCreator<UITextDriver>(uiTextDriverFactory);
export { UITextDriver };

import { textDriverFactory, TextDriver } from '../components/Text/Text.protractor.driver';
export const textTestkitFactory = protractorTestkitFactoryCreator<TextDriver>(textDriverFactory);
export { TextDriver };

import { autocompleteDriverFactory, AutocompleteDriver } from '../components/Autocomplete/Autocomplete.protractor.driver';
export const autocompleteTestkitFactory = protractorTestkitFactoryCreator<AutocompleteDriver>(autocompleteDriverFactory);
export { AutocompleteDriver };

import { toggleSwitchDriverFactory, ToggleSwitchDriver } from '../components/ToggleSwitch/ToggleSwitch.protractor.driver';
export const toggleSwitchTestkitFactory = protractorTestkitFactoryCreator<ToggleSwitchDriver>(toggleSwitchDriverFactory);
export { ToggleSwitchDriver };

import { counterBadgeDriverFactory as stylableCounterBadgeDriverFactory, BadgeDriver as StylableCounterBadgeDriver } from '../components/StylableCounterBadge/CounterBadge.protractor.driver';
export const stylableCounterBadgeTestkitFactory = protractorTestkitFactoryCreator<StylableCounterBadgeDriver>(stylableCounterBadgeDriverFactory);
export { StylableCounterBadgeDriver };

import { labelWithOptionsDriverFactory, LabelWithOptionsDriver } from '../components/LabelWithOptions/LabelWithOptions.protractor.driver';
export const labelWithOptionsTestkitFactory = protractorTestkitFactoryCreator<LabelWithOptionsDriver>(labelWithOptionsDriverFactory);
export { LabelWithOptionsDriver };

import { multiSelectDriverFactory, MultiSelectDriver } from '../components/MultiSelect/MultiSelect.protractor.driver';
export const multiSelectTestkitFactory = protractorTestkitFactoryCreator<MultiSelectDriver>(multiSelectDriverFactory);
export { MultiSelectDriver };

import { labelDriverFactory, LabelDriver } from '../components/Label/Label.protractor.driver';
export const labelTestkitFactory = protractorTestkitFactoryCreator<LabelDriver>(labelDriverFactory);
export { LabelDriver };

import { floatingHelperDriverFactory, FloatingHelperDriver } from '../components/FloatingHelper/FloatingHelper.protractor.driver';
export const floatingHelperTestkitFactory = protractorTestkitFactoryCreator<FloatingHelperDriver>(floatingHelperDriverFactory);
export {FloatingHelperDriver};

import { thumbnailDriverFactory, ThumbnailDriver } from '../components/Thumbnail/Thumbnail.protractor.driver';
export const thumbnailTestkitFactory = protractorTestkitFactoryCreator<ThumbnailDriver>(thumbnailDriverFactory);
export { ThumbnailDriver };

import { hBoxDriverFactory } from '../components/HBox/HBox.protractor.driver';
export const hBoxTestkitFactory = protractorTestkitFactoryCreator(hBoxDriverFactory);

import { vBoxDriverFactory } from '../components/VBox/VBox.protractor.driver';
export const vBoxTestkitFactory = protractorTestkitFactoryCreator(vBoxDriverFactory);
