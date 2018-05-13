import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { textDriverFactory as coreTextDriverFactory, TextDriver as CoreTextDriver } from '../core/CoreText/Text.driver';
import { StylableDOMUtil } from 'stylable/test-utils';
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
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreTextDriver,
    getSize: () => <Size | null>stylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => <Skin | null>stylableDOMUtil.getStyleState(element, 'skin'),
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light'),
    isBold: () => stylableDOMUtil.hasStyleState(element, 'bold'),
    isSecondary: () => stylableDOMUtil.hasStyleState(element, 'secondary')
  };
};
