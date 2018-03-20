import {labelDriverFactory} from 'wix-ui-core/dist/src/components/StylableLabel/Label.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './UILabel.st.css';

export const uiLabelDriverFactory = ({element}) => {
  const coreLabelDriver = labelDriverFactory({element});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreLabelDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance')
  };
};
