import * as React from 'react';
import {Heading} from '../src/components/Heading';
import * as HeadingSource from '!raw-loader!../src/components/Heading/Heading.tsx';

export default {
  category: 'Components',
  storyName: 'Heading',
  component: Heading,
  source: HeadingSource,
  componentPath: '../src/components/Heading/Heading.tsx',
  componentProps: {
    dataHook: 'storybook-heading',
    children: 'Some text'
  }
};
