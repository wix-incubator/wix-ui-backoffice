import * as React from 'react';
import {Checkbox} from '../src/components/Checkbox';
import * as CheckboxSource from '!raw-loader!../src/components/Checkbox/Checkbox.tsx';

export default {
  category: 'Components',
  storyName: 'Checkbox',
  component: Checkbox,
  source: CheckboxSource,
  componentPath: '../src/components/Checkbox/Checkbox.tsx',
  componentProps: setState => ({
    'data-hook': 'storybook-checkbox',
    children: ['Hello World!'],
    onChange: evt => setState({checked: evt.checked}),
  }),
  exampleProps: {
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: evt => evt.checked ? 'Checked' : 'Unchecked',
  }
};
