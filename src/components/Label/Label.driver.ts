import {labelDriverFactory as CoreLabelDriverFactory} from 'wix-ui-core/dist/src/components/Label/Label.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './Label.st.css';

export const labelDriverFactory = ({element}) => {
  const coreLabelDriver = CoreLabelDriverFactory({element});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreLabelDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance')
  };
};
