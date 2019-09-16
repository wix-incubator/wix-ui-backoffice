import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { textDriverFactory, TextDriver } from '../core/CoreText/Text.driver';
import { StylableDOMUtilCompat } from '@stylable/dom-test-kit';
import style from './Heading.st.css';
import { Appearance } from './Heading';

export interface HeadingDriver extends TextDriver {
  getAppearance: () => Appearance;
  isLight: () => boolean;
}

export const headingDriverFactory = (factoryParams: ComponentFactory): HeadingDriver => {
  const coreTextDriver = textDriverFactory(factoryParams);
  const stylableDOMUtil = new StylableDOMUtilCompat(style);
  const { element } = factoryParams;

  return {
    ...coreTextDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance') as Appearance,
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light'),
  };
};
