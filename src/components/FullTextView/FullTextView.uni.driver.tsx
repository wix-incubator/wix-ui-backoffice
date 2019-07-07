import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import {UniDriver} from 'wix-ui-test-utils/unidriver';

export interface FullTextViewUniDriver extends BaseUniDriver {
  getText: () => Promise<String>;
  getTagName: () => Promise<String>;
}

export const fullTextViewUniDriverFactory = (base: UniDriver): FullTextViewUniDriver => {
  return {
    ...baseUniDriverFactory(base),
    getText: () => base.text() as Promise<String>,
    getTagName: async () => (await base._prop('tagName')).toLowerCase() as Promise<String>,
  }
};
