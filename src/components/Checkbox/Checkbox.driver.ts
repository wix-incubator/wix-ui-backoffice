import {checkboxDriverFactory as CheckboxDriverFactory} from 'wix-ui-core/dist/src/components/Checkbox/Checkbox.driver';

export const checkboxDriverFactory = ({element}) => {
  return {
    ...checkboxDriverFactory({element})
  };
};
