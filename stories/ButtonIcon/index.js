import React from 'react';
import createStory from '../create-story';

import ButtonIcon from '../../src/components/ButtonIcon';
import ButtonIconSource from '!raw-loader!../../src/components/ButtonIcon';

export const story = () => createStory({
  category: 'Components',
  name: 'ButtonIcon',
  storyName: 'ButtonIcon',
  component: ButtonIcon,
  componentProps: () => ({
    icon: (<span key="1">+</span>)
  }),
  source: ButtonIconSource
});
