import {checkboxDriverFactory as CheckboxDriverFactory} from 'wix-ui-core/drivers/vanilla';

export const checkboxDriverFactory = ({element, eventTrigger}) => {
  return {
    ...CheckboxDriverFactory({element, eventTrigger})
  };
};
