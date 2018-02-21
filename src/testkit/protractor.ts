import {protractorTestkitFactoryCreator} from 'wix-ui-test-utils/protractor';

import {counterBadgeDriverFactory} from '../components/CounterBadge/CounterBadge.protractor.driver';
export const counterBadgeTestkitFactory = protractorTestkitFactoryCreator(counterBadgeDriverFactory);

import {uiTextDriverFactory} from '../components/StylableUIText/UIText.protractor.driver';
export const uiTextTestkitFactory = protractorTestkitFactoryCreator(uiTextDriverFactory);
