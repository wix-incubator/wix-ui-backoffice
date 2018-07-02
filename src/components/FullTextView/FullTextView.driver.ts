import { ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import { textDriverFactory, TextDriver } from '../core/CoreText/Text.driver';
import { StylableDOMUtil } from 'stylable/test-utils';
import style from './FullTextView.st.css';
import { Appearance } from './Heading';

export interface FullTextViewDriver extends TextDriver {
}

export const fullTextViewDriverFactory = (factoryParams: ComponentFactory): FullTextViewDriver => {
  const coreTextDriver = textDriverFactory(factoryParams);
  const stylableDOMUtil = new StylableDOMUtil(style);
  const { element } = factoryParams;

  return {
    ...coreTextDriver,
  };
};
