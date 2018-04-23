import * as React from 'react';
import {Button} from '../src/components/Button';
import * as ButtonSource from '!raw-loader!../src/components/Button/Button.tsx';

export default {
  category: 'Components',
  storyName: 'Button',
  component: Button,
  source: ButtonSource,
  componentPath: '../src/components/Button/Button.tsx',
  componentProps: setState => ({
    'data-hook': 'storybook-button',
    children: ['Click me!'],
  }),
};
