import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils/protractor';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.protractor.driver';
export const counterBadgeTestkitFactory = protractorTestkitFactoryCreator(counterBadgeDriverFactory);

import {headingDriverFactory} from '../components/Heading/Heading.protractor.driver';
export const headingTestkitFactory = protractorTestkitFactoryCreator(headingDriverFactory);

import {uiTextDriverFactory} from '../components/StylableUIText/UIText.protractor.driver';
export const uiTextTestkitFactory = protractorTestkitFactoryCreator(uiTextDriverFactory);
