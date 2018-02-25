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
