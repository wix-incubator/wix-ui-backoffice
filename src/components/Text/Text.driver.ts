import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { textDriverFactory as coreTextDriverFactory, TextDriver as CoreTextDriver } from '../core/CoreText/Text.driver';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Text.st.css';
import { Skin, Size } from './constants';

export interface TextDriver extends CoreTextDriver {
  getSize: () => Size,
  getSkin: () => Skin,
  isLight: () => boolean,
  isBold: () => boolean,
  isSecondary: () => boolean
}

export const textDriverFactory = ({ element, eventTrigger, wrapper }: ComponentFactory): TextDriver => {
  const coreTextDriver = coreTextDriverFactory({ element, eventTrigger, wrapper });
  const StylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreTextDriver,
    getSize: () => <Size | null>StylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => <Skin | null>StylableDOMUtil.getStyleState(element, 'skin'),
    isLight: () => StylableDOMUtil.hasStyleState(element, 'light'),
    isBold: () => StylableDOMUtil.hasStyleState(element, 'bold'),
    isSecondary: () => StylableDOMUtil.hasStyleState(element, 'secondary')
  };
};
