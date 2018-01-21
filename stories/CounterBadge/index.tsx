import * as React from 'react';
import createStory from '../create-story';
import {CounterBadge} from '../../src/components/CounterBadge';
import * as CounterBadgeSource from '!raw-loader!../../src/components/CounterBadge/index.tsx';
import Add from 'wix-ui-icons-common/Add';

export const story = () => createStory({
  category: 'Components',
  name: 'CounterBadge',
  storyName: 'CounterBadge',
  component: CounterBadge,
  componentProps: () => ({
    children: '12',
    dataHook: 'storybook-counterBadge'
  }),
  exampleProps: {
    children: ['1', '12', () => <Add/>]
  },
  source: CounterBadgeSource
});
