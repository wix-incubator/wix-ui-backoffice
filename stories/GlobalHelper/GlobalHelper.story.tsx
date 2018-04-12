import * as React from 'react';
import {GlobalHelper} from '../../src/components/GlobalHelper';
import {storySettings} from './StorySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: GlobalHelper,
  componentPath: '../../src/components/GlobalHelper/GlobalHelper.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    shown: true,
    content: <span>This is the GlobalHelper content</span>,
    children: <span>I am a GlobalHelper target</span>,
    placement: 'right'
  },

  exampleProps: {
    placement: 'right'
  }
};
