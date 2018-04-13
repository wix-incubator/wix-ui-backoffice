import * as React from 'react';
import {GlobalHelper} from '../../src/components/GlobalHelper';
import {HelperContent} from '../../src/components/GlobalHelper/content/HelperContent';

import {storySettings} from './StorySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: GlobalHelper,
  componentPath: '../../src/components/GlobalHelper/GlobalHelper.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    shown: true,
    content: <HelperContent title="This is the title"/>,
    children: <span>I am a GlobalHelper target</span>,
    placement: 'right'
  },

  exampleProps: {
    placement: 'right'
  }
};
