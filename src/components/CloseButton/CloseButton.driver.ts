import { StylableDOMUtil } from 'stylable/test-utils';
import { buttonDriverFactory as coreButtonDriverFactory } from 'wix-ui-core/dist/src/components/Button/Button.driver';
import { DriverFactory, BaseDriver, ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import style from './CloseButton.st.css';
import { Skin, Size } from './constants';

// TODO: move this to core
export interface CoreButtonDriver extends BaseDriver {
  exists: () => boolean;
  click: () => any;
  getType: () => any;
  getTextContent: () => any;
  isDisabled: () => boolean;
  styles: {
    getMinWidth: () => string;
    getWidth: () => string;
    getHeight: () => string;
    getPadding: () => string;
    getBorderRadius: () => string;
  }
}

export interface CloseButtonDriver extends CoreButtonDriver {
  getSkin: () => Skin;
  getSize: () => Size;
}

export const closeButtonDriverFactory = ({ element, eventTrigger }: ComponentFactory): CloseButtonDriver => {
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const getStyleState = <T>(stateName: string) => stylableDOMUtil.getStyleState(element, stateName) as any as T;
  return {
    ...coreButtonDriverFactory({ element, eventTrigger }),
    getSkin: () => getStyleState<Skin>('skin'),
    getSize: () => getStyleState<Size>('size'),
  };
};
