import {textDriverFactory as coreTextDriverFctory} from 'wix-ui-core/dist/src/components/StylableText/Text.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import {Appearance} from './Text';
import style from './Text.st.css';

export const textDriverFactory = ({element}) => {
  const coreTextDriver = coreTextDriverFctory({element});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreTextDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance'),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin')
  };
};
