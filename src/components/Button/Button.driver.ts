import {buttonDriverFactory as ButtonDriverFactory} from 'wix-ui-core/dist/src/components/Button/Button.driver';

export const buttonDriverFactory = ({element, eventTrigger}) => {
  return {
    ...ButtonDriverFactory({element, eventTrigger})
  };
};
