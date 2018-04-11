import {textDriverFactory} from 'wix-ui-core/dist/src/components/StylableText/Text.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './Heading.st.css';
import {Appearance} from './Heading';

export const headingDriverFactory = ({element}) => {
  const coreTextDriver = textDriverFactory({element});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreTextDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance'),
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light'),
  };
};
