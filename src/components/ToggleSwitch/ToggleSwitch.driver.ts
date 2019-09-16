import {toggleSwitchDriverFactory as coreToggleSwitchDriverFactory} from 'wix-ui-core/drivers-standalone/vanilla';
import {StylableDOMUtil} from '@stylable/dom-test-kit';
import style from './ToggleSwitch.st.css';

export const toggleSwitchDriverFactory = ({element, eventTrigger}) => {
  const coreToggleSwitchDriver = coreToggleSwitchDriverFactory({element, eventTrigger});
  const StylableDOMUtil = new StylableDOMUtil(style, element);

  return {
    ...coreToggleSwitchDriver,
    getSize: () => StylableDOMUtil.getStyleState(element, 'size'),
    getSkin: () => StylableDOMUtil.getStyleState(element, 'skin')
  };
};
