import * as React from 'react';

import { CloseButton } from '../../src/components/CloseButton';
import { enumValues } from '../../src/utils';
import { Skin, Size } from '../../src/components/CloseButton/constants';
import { storySettings } from './storySettings';

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: CloseButton,
  componentPath: '../../src/components/CloseButton/CloseButton.tsx',
  componentProps: {
    'data-hook': storySettings.dataHook
  },
  exampleProps: {
    size: enumValues(Size)
  }
};
