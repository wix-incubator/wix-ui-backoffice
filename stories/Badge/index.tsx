import * as React from 'react';
import createStory from '../create-story';

import {Badge} from '../../src/components/Badge';
import * as BadgeSource from '!raw-loader!../../src/components/Badge/index.tsx';

const icons = [null, <span key="1">+</span>, <span key="2">-</span>]; // just to see if it's working

export const story = () => createStory({
  category: 'Components',
  name: 'Badge',
  storyName: 'Badge',
  component: Badge,
  componentProps: () => ({
    children: 'I\'M A BADGE!',
    dataHook: 'storybook-badge'
  }),
  exampleProps: {
    prefixIcon: icons,
    suffixIcon: icons
  },
  source: BadgeSource
});
