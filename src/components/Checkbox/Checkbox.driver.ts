import {checkboxDriverFactory as CheckboxDriverFactory} from 'wix-ui-core/drivers/drivers';

export const checkboxDriverFactory = ({element, eventTrigger}) => {
  return {
    ...CheckboxDriverFactory({element, eventTrigger})
  };
};
