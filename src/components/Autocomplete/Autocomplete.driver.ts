import {inputWithOptionsDriverFactory} from 'wix-ui-core/dist/src/components/InputWithOptions/InputWithOptions.driver';

export const autocompleteDriverFactory = ({element, component, eventTrigger, wrapper}) => {
  const driver = inputWithOptionsDriverFactory({element, component, eventTrigger, wrapper});
  return {
    ...driver
  };
};
