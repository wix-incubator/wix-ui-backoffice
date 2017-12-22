import React from 'react';
import createStory from '../create-story';

import Badge from '../../src/components/Badge';
import BadgeSource from '!raw-loader!../../src/components/Badge';

const icons = [<span key="1">+</span>, <span key="2">-</span>]; // just to see if it's working

export const story = () => createStory({
  category: 'Components',
  name: 'Badge',
  storyName: 'Badge',
  component: Badge,
  componentProps: () => ({
    children: 'I\'M A BADGE!'
  }),
  exampleProps: {
    prefixIcon: icons,
    suffixIcon: icons
  },
  source: BadgeSource
});
