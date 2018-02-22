import {inputWithOptionsDriverFactory as coreInputWithOptionsDriverFactory} from 'wix-ui-core/dist/src/components/InputWithOptions/InputWithOptions.driver';

export const inputWithOptionsDriverFactory = ({element, component, eventTrigger, wrapper}) => {
  const driver = coreInputWithOptionsDriverFactory({element, component, eventTrigger, wrapper});
  return {
    ...driver
  };
};
