import * as React from 'react';
import {FloatingHelper} from '../../src/components/FloatingHelper';
import {HelperContent} from '../../src/components/FloatingHelper/HelperContent/HelperContent';

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
        body="This is the a long text which is passed in the `text` propterty"
      />),
    children: <span>I am a FloatingHelper target</span>,
    placement: 'right'
  },
  examples: (
    <div>
      <div style={{height: 300}}/>
      <FloatingHelper
        data-hook={storySettings.examples.textOnly.dataHook}
        shown
        placement="bottom"
        content={ (
          <HelperContent
            body={storySettings.examples.textOnly.params.body}
          />)}
        children={<span>I am a long long long long long long long long FloatingHelper target</span>}
      />
      <div style={{height: 300}}/>
    </div>
  )

};
