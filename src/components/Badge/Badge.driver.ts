import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { StylableDOMUtilCompat } from '@stylable/dom-test-kit';
import style from './Badge.st.css';
import { Type, Skin, Size } from './constants';

export interface BadgeDriver {
  exists: () => boolean,
  getContent: () => string,
  text: () => string,
  getType: () => Type,
  getSkin: () => Skin,
  getSize: () => Size,
  isUppercase: () => boolean,
  hasClickCursor: () => boolean,
  getPrefixIcon: () => Element | null,
  getSuffixIcon: () => Element | null,
  click: () => void
}


export const badgeDriverFactory = (factoryParams: ComponentFactory): BadgeDriver => {
  const { element, eventTrigger } = factoryParams;
  const stylableDOMUtil = new StylableDOMUtilCompat(style, element);

  return {
    /** checks if element exists */
    exists: () => !!element,
    /** returns elements innerHtml */
    getContent: () => element.innerHTML,
    /** returns elements text */
    text: () => element.textContent,
    getType: () => stylableDOMUtil.getStyleState(element, 'type') as Type,
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin') as Skin,
    getSize: () => stylableDOMUtil.getStyleState(element, 'size') as Size,
    isUppercase: () => stylableDOMUtil.getStyleState(element, 'uppercase') === 'true',
    hasClickCursor: () => stylableDOMUtil.getStyleState(element, 'clickable') === 'true',
    getPrefixIcon: () => stylableDOMUtil.select('.prefix'),
    getSuffixIcon: () => stylableDOMUtil.select('.suffix'),
    click: () => eventTrigger.click(element)
  };
};
