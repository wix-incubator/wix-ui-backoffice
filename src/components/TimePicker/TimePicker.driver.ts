import {
  timePickerDriverFactory as coreTimePickerDriverFactory
} from 'wix-ui-core/drivers/vanilla';

export const timePickerDriverFactory = ({element, eventTrigger}) => {
  const coreTimePickerDriver = coreTimePickerDriverFactory({element, eventTrigger});

  return {
    ...coreTimePickerDriver,
    getValue: () => coreTimePickerDriver.getValue().slice(0, 5),
    isAmPmIndicatorExist: () => {
      const value = coreTimePickerDriver.getValue().toLowerCase();
      return value.includes('am') || value.includes('pm');
    },
    getAmPmIndicatorText: () => coreTimePickerDriver.getValue().toLowerCase().slice(6, 8)
  };
};
