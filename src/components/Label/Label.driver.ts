import {labelDriverFactory as CoreLabelDriverFactory} from 'wix-ui-core/drivers-standalone/vanilla';
import {StylableDOMUtil} from '@stylable/dom-test-kit';
import style from './Label.st.css';

export const labelDriverFactory = ({element, eventTrigger}) => {
  const coreLabelDriver = CoreLabelDriverFactory({element, eventTrigger});
  const StylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreLabelDriver,
    getSize: () => StylableDOMUtil.getStyleState(element, 'size')
  };
};
