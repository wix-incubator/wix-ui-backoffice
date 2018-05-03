import {textDriverFactory as coreTextDriverFctory, TextDriver as CoreTextDriver} from 'wix-ui-core/dist/src/components/StylableText/Text.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './Text.st.css';
import {Size, Skin} from './constants';
import {DriverFactory} from 'wix-ui-test-utils/driver-factory';

export interface TextDriver extends CoreTextDriver {
  getSize: () => Size;
  getSkin: () => Skin;
  isLight: () => boolean;
  isBold: () => boolean;
  isSecondary: () => boolean;
}

export const textDriverFactory: DriverFactory<TextDriver> = ({element}) => {
  const coreTextDriver = coreTextDriverFctory({element});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreTextDriver,
    getSize: () => <Size>stylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => <Skin>stylableDOMUtil.getStyleState(element, 'skin'),
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light'),
    isBold: () => stylableDOMUtil.hasStyleState(element, 'bold'),
    isSecondary: () => stylableDOMUtil.hasStyleState(element, 'secondary')
  };
};
