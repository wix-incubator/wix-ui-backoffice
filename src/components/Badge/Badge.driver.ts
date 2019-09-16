import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
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
  const StylableDOMUtil = new StylableDOMUtil(style, element);

  return {
    /** checks if element exists */
    exists: () => !!element,
    /** returns elements innerHtml */
    getContent: () => element.innerHTML,
    /** returns elements text */
    text: () => element.textContent,
    getType: () => StylableDOMUtil.getStyleState(element, 'type') as Type,
    getSkin: () => StylableDOMUtil.getStyleState(element, 'skin') as Skin,
    getSize: () => StylableDOMUtil.getStyleState(element, 'size') as Size,
    isUppercase: () => StylableDOMUtil.getStyleState(element, 'uppercase') === true,
    hasClickCursor: () => StylableDOMUtil.getStyleState(element, 'clickable') === true,
    getPrefixIcon: () => StylableDOMUtil.select('.prefix'),
    getSuffixIcon: () => StylableDOMUtil.select('.suffix'),
    click: () => eventTrigger.click(element)
  };
};
