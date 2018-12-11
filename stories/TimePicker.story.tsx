import { TimePicker } from '../src/components/TimePicker/TimePicker';
import { enumValues } from '../src/utils';
import { Size } from '../src/components/TimePicker/constants';
import { TimePickerUtils } from 'wix-ui-core/time-picker';

const { leftpad } = TimePickerUtils;
const now = new Date();
const formattedNow = `${leftpad(now.getHours())}:${leftpad(now.getMinutes())}`;

export default {
  category: 'Components',
  name: 'TimePicker',
  storyName: 'TimePicker',
  component: TimePicker,
  componentPath: '../src/components/TimePicker/TimePicker.tsx',

  componentProps: setState => ({
    'data-hook': 'storybook-timePicker',
    error: false,
    disableAmPm: false,
    onChange: value => setState({ value })
  }),

  exampleProps: {
    size: enumValues(Size),
    onChange: value => value,
    value: [
      {
        label: `current time, ${formattedNow}`,
        value: `${formattedNow}`
      },
      {
        label: 'noon',
        value: '12:00'
      },
      {
        label: 'time to sleep',
        value: '02:34'
      }
    ]
  }
};
