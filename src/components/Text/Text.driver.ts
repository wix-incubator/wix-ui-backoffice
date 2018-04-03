import {textDriverFactory as coreTextDriverFctory} from 'wix-ui-core/dist/src/components/StylableText/Text.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import {Size} from './constants';
import style from './Text.st.css';

export const textDriverFactory = ({element}) => {
  const coreTextDriver = coreTextDriverFctory({element});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreTextDriver,
    getSize: () => stylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light'),
    isBold: () => stylableDOMUtil.hasStyleState(element, 'bold'),
    isSecondary: () => stylableDOMUtil.hasStyleState(element, 'secondary')
  };
};
