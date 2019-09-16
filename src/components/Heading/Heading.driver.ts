import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { textDriverFactory, TextDriver } from '../core/CoreText/Text.driver';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './Heading.st.css';
import { Appearance } from './Heading';

export interface HeadingDriver extends TextDriver {
  getAppearance: () => Appearance;
  isLight: () => boolean;
}

export const headingDriverFactory = (factoryParams: ComponentFactory): HeadingDriver => {
  const coreTextDriver = textDriverFactory(factoryParams);
  const StylableDOMUtil = new StylableDOMUtil(style);
  const { element } = factoryParams;

  return {
    ...coreTextDriver,
    getAppearance: () => StylableDOMUtil.getStyleState(element, 'appearance') as Appearance,
    isLight: () => StylableDOMUtil.hasStyleState(element, 'light'),
  };
};
