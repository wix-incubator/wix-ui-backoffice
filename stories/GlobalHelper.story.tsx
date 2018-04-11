import * as React from 'react';
import {GlobalHelper} from '../src/components/GlobalHelper';

export default {
  category: 'Components',
  storyName: 'GlobalHelper',
  component: GlobalHelper,
  componentPath: '../src/components/GlobalHelper/GlobalHelper.tsx',

  componentProps: {
    'data-hook': 'story-global-helper-right',
    shown: true,
    content: <span>This is the GlobalHelper content</span>,
    children: <span>I am a GlobalHelper target</span>,
    placement: 'right'
  },

  exampleProps: {
    placement: 'right'
  }
};
