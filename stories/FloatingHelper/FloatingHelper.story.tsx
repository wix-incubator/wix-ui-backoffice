import * as React from 'react';
import Image from 'wix-ui-icons-common/Image';
import { FloatingHelper, FloatingHelperProps } from '../../src/components/FloatingHelper';

import { storySettings } from './StorySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: FloatingHelper,
  componentPath: '../../src/components/FloatingHelper/FloatingHelper.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    content: (
      <FloatingHelper.Content
        title="Don’t forget to setup payments"
        body="In order to sell your music you need to choose a payment method."
        actionText="Ok, Take Me There"
        onActionClick={()=> null}
        image={<Image width="102" height="102" viewBox="4 4 18 18"/>}
      />),
    target: <span>I am a FloatingHelper target</span>,
    placement: 'right'
  }
};
