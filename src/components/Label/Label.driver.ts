import {labelDriverFactory as CoreLabelDriverFactory} from 'wix-ui-core/drivers/drivers';
import {StylableDOMUtil} from '@stylable/dom-test-kit';
import style from './Label.st.css';

export const labelDriverFactory = ({element, eventTrigger}) => {
  const coreLabelDriver = CoreLabelDriverFactory({element, eventTrigger});
  const stylableDOMUtil = new StylableDOMUtil(style);

  return {
    ...coreLabelDriver,
    getSize: () => stylableDOMUtil.getStyleState(element, 'size')
  };
};
