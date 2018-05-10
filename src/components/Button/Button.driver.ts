import { StylableDOMUtil } from 'stylable/test-utils';
import { DriverFactory, BaseDriver, ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import style from './Button.st.css';
import { Skin, Priority, Size } from './constants';

export interface ButtonDriver extends BaseDriver {
  /** click on the button root element */
  click: () => any;
  /** returns elements type attribute */
  getType: () => any;
  /** returns elements textContent */
  getTextContent: () => any;
  /** returns if the element is disabled */
  isDisabled: () => boolean;
  styles: {
    /** returns elements min-width css property */
    getMinWidth: () => string;
    /** returns elements width css property */
    getWidth: () => string;
    /** returns elements height css property */
    getHeight: () => string;
    /** returns elements padding css property */
    getPadding: () => string;
    /** returns elements border-radius css property */
    getBorderRadius: () => string;
  }
  getSkin: () => Skin;
  getPriority: () => Priority;
  getSize: () => Size;
}

export const buttonDriverFactory: DriverFactory<ButtonDriver> = (factoryParams: ComponentFactory): ButtonDriver => {
  const getButtonStyle = () => window.getComputedStyle(element);
  const { element, eventTrigger } = factoryParams;
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const getStyleState = <T>(stateName: string) => stylableDOMUtil.getStyleState(element, stateName) as any as T | null;

  return {
    exists: () => !!element,
    click: () => eventTrigger.click(element),
    getType: () => element.getAttribute('type'),
    getTextContent: () => element.textContent,
    isDisabled: () => element.getAttribute('disabled') === '',
    styles: {
      getMinWidth: () => getButtonStyle().minWidth,
      getWidth: () => getButtonStyle().width,
      getHeight: () => getButtonStyle().height,
      getPadding: () => getButtonStyle().padding,
      getBorderRadius: () => getButtonStyle().borderRadius,
    },
    getSkin: () => getStyleState<Skin>('skin'),
    getPriority: () => getStyleState<Priority>('priority'),
    getSize: () => getStyleState<Size>('size'),
  };
};
