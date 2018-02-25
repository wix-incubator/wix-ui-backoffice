import {badgeDriverFactory as coreBadgeDriverFactory} from 'wix-ui-core/dist/src/components/StylableBadge/Badge.driver';
import {uiTextDriverFactory} from '../StylableUIText/UIText.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './Badge.st.css';

export const badgeDriverFactory = ({element}) => {
  const coreBadgeDriver = coreBadgeDriverFactory({element});
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const uiTextDriver = uiTextDriverFactory({element: stylableDOMUtil.select('.text')});

  return {
    ...coreBadgeDriver,
    getType: () => stylableDOMUtil.getStyleState(element, 'type'),
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    getUIText: () => uiTextDriver,
    getPrefixIcon: () => stylableDOMUtil.select('.prefix'),
    getSuffixIcon: () => stylableDOMUtil.select('.suffix')
  };
};
