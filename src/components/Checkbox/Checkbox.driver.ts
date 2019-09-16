import {checkboxDriverFactory as CheckboxDriverFactory} from 'wix-ui-core/drivers-standalone/vanilla';

export const checkboxDriverFactory = ({element, eventTrigger}) => {
  return {
    ...CheckboxDriverFactory({element, eventTrigger})
  };
};
