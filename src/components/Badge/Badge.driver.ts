import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { badgeDriverFactory as coreBadgeDriverFactory, BadgeDriver as CoreBadgeDriver } from 'wix-ui-core/dist/src/components/StylableBadge/Badge.driver';
import { uiTextDriverFactory, UITextDriver } from '../StylableUIText/UIText.driver';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Badge.st.css';
import { Type, Skin, Size } from './constants';

export interface BadgeDriver extends CoreBadgeDriver {
  getType: () => Type,
  getSkin: () => Skin,
  getSize: () => Size,
  getUIText: () => UITextDriver,
  getPrefixIcon: () => Element | null,
  getSuffixIcon: () => Element | null
}

export const badgeDriverFactory = (factoryParams: ComponentFactory): BadgeDriver => {
  const coreBadgeDriver = coreBadgeDriverFactory(factoryParams);
  const { element } = factoryParams;
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const uiTextDriver = uiTextDriverFactory({ ...factoryParams, element: stylableDOMUtil.select('.text') });

  return {
    ...coreBadgeDriver,
    getType: () => stylableDOMUtil.getStyleState(element, 'type') as Type,
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin') as Skin,
    getSize: () => stylableDOMUtil.getStyleState(element, 'size') as Size,
    getUIText: () => uiTextDriver,
    getPrefixIcon: () => stylableDOMUtil.select('.prefix'),
    getSuffixIcon: () => stylableDOMUtil.select('.suffix')
  };
};
