import {labelDriverFactory as CoreLabelDriverFactory} from 'wix-ui-core/drivers/vanilla';
import {StylableDOMUtilCompat} from '@stylable/dom-test-kit';
import style from './Label.st.css';

export const labelDriverFactory = ({element, eventTrigger}) => {
  const coreLabelDriver = CoreLabelDriverFactory({element, eventTrigger});
  const stylableDOMUtil = new StylableDOMUtilCompat(style);

  return {
    ...coreLabelDriver,
    getSize: () => stylableDOMUtil.getStyleState(element, 'size')
  };
};
