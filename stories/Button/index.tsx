import * as React from 'react';
import createStory from '../create-story';

import {Button} from '../../src/components/Button';
import * as ButtonSource from '!raw-loader!../../src/components/Button/Button.tsx';

const icons = [<span key="1">+</span>, <span key="2">-</span>]; // just to see if it's working

export const story = () => createStory({
  category: 'Components',
  name: 'Button',
  storyName: 'Button',
  component: Button,
  componentProps: () => ({
    children: 'Click me',
    dataHook: 'storybook-button'
  }),
  exampleProps: {
    prefixIcon: icons,
    suffixIcon: icons
  },
  source: ButtonSource
});
