import * as React from 'react';
import {FloatingHelper} from '../../src/components/FloatingHelper';
import {HelperContent} from '../../src/components/FloatingHelper/content/HelperContent';

import {storySettings} from './StorySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: FloatingHelper,
  componentPath: '../../src/components/FloatingHelper/FloatingHelper.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    shown: true,
    content: (
              <HelperContent
                title="This is the title"
                text="This is a long text which is passed in the `text` property"
              />),
    children: <span>I am a FloatingHelper target</span>,
    placement: 'right'
  },

};
