import { StylableDOMUtil } from 'stylable/test-utils';
import {buttonDriverFactory as coreButtonDriverFactory} from 'wix-ui-core/dist/src/components/Button/Button.driver';
import { DriverFactory, BaseDriver } from 'wix-ui-test-utils/driver-factory';
import style from './Button.st.css';
import { Skin , Priority, Size} from './constants';

export interface ButtonDriver extends BaseDriver {
  getSkin: ()=> Skin;
  getPriority: ()=> Priority;
  getSize: ()=> Size;
}

export const buttonDriverFactory : DriverFactory<ButtonDriver>= ({element, eventTrigger}) => {
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const getStyleState = <T>(stateName: string) => stylableDOMUtil.getStyleState(element, stateName) as any as T;
  return {
    ...coreButtonDriverFactory({element, eventTrigger}),
    getSkin: ()=> getStyleState<Skin>('skin'),
    getPriority: ()=> getStyleState<Priority>('priority'),
    getSize: ()=> getStyleState<Size>('size'),
  };
};
