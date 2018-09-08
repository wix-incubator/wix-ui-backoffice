import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Badge.st.css';
import { Type, Skin, Size } from './constants';

export interface BadgeDriver {
  exists: () => boolean,
  getContent: () => string,
  getContentText: () => string,
  getType: () => Type,
  getSkin: () => Skin,
  getSize: () => Size,
  isUppercase: () => boolean,
  hasClickCursor: () => boolean,
  getText: () => string,
  getPrefixIcon: () => Element | null,
  getSuffixIcon: () => Element | null,
  click: () => void
}


export const badgeDriverFactory = (factoryParams: ComponentFactory): BadgeDriver => {
  const { element, eventTrigger } = factoryParams;
  const stylableDOMUtil = new StylableDOMUtil(style, element);

  return {
    /** checks if element exists */
    exists: () => !!element,
    /** returns elements innerHtml */
    getContent: () => element.innerHTML,
    /** returns elements innerText */
    getContentText: () => element.textContent,
    getType: () => stylableDOMUtil.getStyleState(element, 'type') as Type,
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin') as Skin,
    getSize: () => stylableDOMUtil.getStyleState(element, 'size') as Size,
    isUppercase: () => stylableDOMUtil.getStyleState(element, 'uppercase') === 'true',
    hasClickCursor: () => stylableDOMUtil.getStyleState(element, 'clickable') === 'true',
    getText: () => stylableDOMUtil.select('.text').textContent,
    getPrefixIcon: () => stylableDOMUtil.select('.prefix'),
    getSuffixIcon: () => stylableDOMUtil.select('.suffix'),
    click: () => eventTrigger.click(element)
  };
};
