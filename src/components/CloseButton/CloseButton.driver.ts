import { StylableDOMUtil } from '@stylable/dom-test-kit';
import { buttonDriverFactory, ButtonDriver } from 'wix-ui-core/drivers/drivers';
import { DriverFactory, BaseDriver, ComponentFactory } from 'wix-ui-test-utils/driver-factory';
import style from './CloseButton.st.css';
import { Skin, Size } from './constants';

export interface CloseButtonDriver extends ButtonDriver {
  getSkin: () => Skin;
  getSize: () => Size;
}

export const closeButtonDriverFactory = (factoryParams: ComponentFactory): CloseButtonDriver => {
  const { element } = factoryParams;
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const getStyleState = <T>(stateName: string) => stylableDOMUtil.getStyleState(element, stateName) as any as T | null;

  return {
    ...buttonDriverFactory(factoryParams),
    getSkin: () => getStyleState<Skin>('skin'),
    getSize: () => getStyleState<Size>('size'),
  };
};
