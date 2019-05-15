import {StylableUnidriverUtil, UniDriver} from 'wix-ui-test-utils/unidriver';
import {labelUniDriverFactory as coreLabelUniDriverFactory,LabelDriver as CoreLabelDriver} from 'wix-ui-core/dist/src/components/deprecated/label/Label.uni.driver';

import {Size} from './constants';
import styles from './Label.st.css';

export interface LabelDriver extends CoreLabelDriver {
  /** 
   * Get size
   */
  getSize: () => Promise<Size>;
}

export const labelUniDriverFactory = (base: UniDriver): LabelDriver => {
  const stylableUnidriverUtil = new StylableUnidriverUtil(styles);

  return {
    ...coreLabelUniDriverFactory(base),
    getSize: () => stylableUnidriverUtil.getStyleState(base, 'size') as Promise<Size>
  }
};
