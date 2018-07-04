import {TimePicker} from '../src/components/TimePicker/TimePicker';
import {enumValues} from '../src/utils';
import {Size} from '../src/components/TimePicker/constants';

const now = new Date();

export default {
  category: 'Components',
  name: 'TimePicker',
  storyName: 'TimePicker',
  component: TimePicker,
  componentPath: '../src/components/TimePicker/TimePicker.tsx',

  componentProps: {
    'data-hook': 'storybook-timePicker',
    error: false,
    disableAmPm: false,
    value: new Date(),
    onChange: value => console.log(value)
  },

  exampleProps: {
    size: enumValues(Size),
    onChange: value => value,
    value: [
      { label: `current time, ${now.getHours()}:${now.getMinutes()}`,
        value: `${now.getHours()}:${now.getMinutes()}`
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
