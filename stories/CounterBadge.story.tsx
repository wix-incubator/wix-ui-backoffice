import * as React from 'react';
import {CounterBadge} from '../src/components/CounterBadge';
import Add from 'wix-ui-icons-common/Add';

export default {
  category: 'Components',
  storyName: 'CounterBadge',
  component: CounterBadge,
  componentPath: '../src/components/CounterBadge',

  componentProps: {
    children: '12',
    dataHook: 'storybook-counterBadge'
  },

  exampleProps: {
    children: ['1', '12', () => <Add/>]
  }
};
