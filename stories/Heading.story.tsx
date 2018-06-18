import * as React from 'react';
import {Heading, Appearance} from '../src/components/Heading/Heading';
import {enumValues} from '../src/utils';

export default {
  category: 'Components',
  storyName: 'Heading',
  component: Heading,
  componentPath: '../src/components/Heading/Heading.tsx',

  componentProps: {
    'data-hook': 'storybook-heading',
    children: 'Some text',
    light: false
  },
  exampleProps: {
    appearance: enumValues(Appearance)
  }
};
