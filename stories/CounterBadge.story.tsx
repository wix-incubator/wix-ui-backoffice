import * as React from 'react';
import Add from 'wix-ui-icons-common/Add';

import {CounterBadge} from '../src/components/CounterBadge';
import {Skin} from '../src/components/CounterBadge/constants';
import {enumValues} from '../src/utils';

export default {
  category: 'Components',
  name: 'CounterBadge',
  storyName: 'CounterBadge',
  component: CounterBadge,
  componentPath: '../src/components/CounterBadge/CounterBadge.tsx',

  componentProps: {
    children: '12',
    dataHook: 'storybook-counterBadge'
  },

  exampleProps: {
    children: ['1', '12', <Add key="0"/>],
    skin: enumValues(Skin)
  }
};
