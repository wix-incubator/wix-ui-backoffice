import * as React from 'react';

import Star from 'wix-ui-icons-common/Star';
import StarFilled from 'wix-ui-icons-common/StarFilled';
import Check from 'wix-ui-icons-common/Check';

import {Checkbox} from '../src/components/Checkbox';

const iconExamples = [
  <Star key="0"/>,
  <StarFilled key="1"/>,
  <Check key="2"/>
];

export default {
  category: 'Components',
  storyName: 'Checkbox',
  component: Checkbox,
  componentPath: '../src/components/Checkbox/Checkbox.tsx',

  componentProps: setState => ({
    'data-hook': 'storybook-checkbox',
    children: 'Hello World!',
    onChange: evt => setState({checked: evt.checked}),
  }),

  exampleProps: {
    onBlur: () => 'Triggered onBlur',
    onFocus: () => 'Triggered onFocus',
    onChange: evt => evt.checked ? 'Checked' : 'Unchecked',
    checkedIcon: iconExamples,
    uncheckedIcon: iconExamples,
    indeterminateIcon: iconExamples,
  },
  examples: (
    <div>
      <h1>Examples</h1>
      <h2> 'text-align:center' should not affect the position of the checked icon</h2>
      <div style={{textAlign: 'center'}} data-hook="storybook-checkbox-text-align">
        <Checkbox checked/>
      </div>
    </div>
  )
};
