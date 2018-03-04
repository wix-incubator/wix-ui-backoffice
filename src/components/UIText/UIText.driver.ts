import {textDriverFactory} from 'wix-ui-core/dist/src/components/Text/Text.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './UIText.st.css';

export const uiTextDriverFactory = ({element}) => {
  const coreTextDriver = textDriverFactory({element});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreTextDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance')
  };
};
