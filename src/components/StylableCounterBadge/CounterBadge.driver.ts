import { Skin } from './constants';
import { ComponentFactory, BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { badgeDriverFactory as coreBadgeDriverFactory, BadgeDriver as CoreBadgeDriver } from 'wix-ui-core/dist/src/components/StylableBadge/Badge.driver';
import { uiTextDriverFactory, UITextDriver } from '../StylableUIText/UIText.driver';
import { StylableDOMUtil } from 'stylable/test-utils';
import style from './CounterBadge.st.css';

export interface CounterBadgeDriver extends CoreBadgeDriver {
  getSkin: () => Skin | null;
  isWide: () => boolean;
  getUIText: () => UITextDriver;
  getIcon: () => Element | null;
}

export const counterBadgeDriverFactory = (factoryParams: ComponentFactory): CounterBadgeDriver => {
  const coreBadgeDriver = coreBadgeDriverFactory(factoryParams);
  const { element } = factoryParams;
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const uiTextDriver = uiTextDriverFactory({ ...factoryParams, element: stylableDOMUtil.select('.text') });

  return {
    ...coreBadgeDriver,
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin') as Skin | null,
    isWide: () => stylableDOMUtil.hasStyleState(element, 'wide'),
    getUIText: () => uiTextDriver,
    getIcon: () => stylableDOMUtil.select('.icon')
  };
};
