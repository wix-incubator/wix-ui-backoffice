import { Skin } from './constants';
import { ComponentFactory, BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { badgeDriverFactory as coreBadgeDriverFactory, BadgeDriver as CoreBadgeDriver } from 'wix-ui-core/drivers-standalone/vanilla';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './CounterBadge.st.css';

export interface CounterBadgeDriver extends CoreBadgeDriver {
  /** returns the skin color */
  getSkin: () => Skin | null;
  /** checks if the component is in wide mode */
  isWide: () => boolean;
  /** returns the icon if provided */
  getIcon: () => Element | null;
}

export const counterBadgeDriverFactory = (factoryParams: ComponentFactory): CounterBadgeDriver => {
  const coreBadgeDriver = coreBadgeDriverFactory(factoryParams);
  const { element } = factoryParams;
  const StylableDOMUtil = new StylableDOMUtil(style, element);

  return {
    ...coreBadgeDriver,
    getSkin: () => StylableDOMUtil.getStyleState(element, 'skin') as Skin | null,
    isWide: () => StylableDOMUtil.hasStyleState(element, 'wide'),
    getIcon: () => StylableDOMUtil.select('.icon')
  };
};
