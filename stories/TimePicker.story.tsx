import * as React from 'react';
import {TimePicker} from '../src/components/TimePicker';

export default {
  category: 'Components',
  storyName: 'TimePicker',
  component: TimePicker,
  componentPath: '../src/components/TimePicker/TimePicker.tsx',
  displayName: 'TimePicker',

  componentProps: {
    'data-hook': 'storybook-timepicker',
  },

  exampleProps: {
    size: ['small', 'medium', 'large'],
  }
};
