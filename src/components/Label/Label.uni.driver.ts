import {UniDriver} from 'wix-ui-test-utils/unidriver';
import {labelUniDriverFactory as coreLabelUniDriverFactory,LabelDriver as CoreLabelDriver} from 'wix-ui-core/dist/src/components/deprecated/label/Label.uni.driver';

import {Size} from './constants';

export interface LabelDriver extends CoreLabelDriver {
  /** 
   * Get size
   */
  getSize: () => Promise<Size>;
}

export const labelUniDriverFactory = (base: UniDriver): LabelDriver => {

  return {
    ...coreLabelUniDriverFactory(base),
    getSize: () => base.attr('data-size') as Promise<Size>
  }
};
