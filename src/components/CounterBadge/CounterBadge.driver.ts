import {badgeDriverFactory as coreBadgeDriverFactory} from 'wix-ui-core/dist/src/components/StylableBadge/Badge.driver';
import {uiTextDriverFactory} from '../StylableUIText/UIText.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './CounterBadge.st.css';

export const counterBadgeDriverFactory = ({element}) => {
  const coreBadgeDriver = coreBadgeDriverFactory({element});
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const uiTextDriver = uiTextDriverFactory({element: stylableDOMUtil.select('.text')});

  return {
    ...coreBadgeDriver,
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
    getUIText: () => uiTextDriver,
    getIcon: () => stylableDOMUtil.select('.icon')
  };
};
