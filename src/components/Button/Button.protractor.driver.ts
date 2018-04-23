// import {buttonDriverFactory} from 'wix-ui-core/dist/src/components/Button/Button.protractor.driver';
// TODO: use driver from core

export const buttonDriverFactory = component => {
  return {
    element: () => component,
    exists: () => component.isPresent()
  };
};
