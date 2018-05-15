import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { textDriverFactory, TextDriver } from '../core/CoreText/Text.driver';
import { StylableDOMUtil } from 'stylable/test-utils';
import style from './UIText.st.css';
import { Appearance } from './UIText';

export interface UITextDriver extends TextDriver {
  getAppearance: () => Appearance;
}

export const uiTextDriverFactory = (factoryParams: ComponentFactory): UITextDriver => {
  const coreTextDriver = textDriverFactory(factoryParams);
  const stylableDOMUtil = new StylableDOMUtil(style);
  const { element } = factoryParams;

  return {
    ...coreTextDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance') as Appearance
  };
};
