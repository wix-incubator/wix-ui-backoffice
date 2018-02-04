import createStory from '../create-story';

import {Input} from '../../src/components/Input';
import * as InputSource from '!raw-loader!../../src/components/Input/index.tsx';

export const story = () => createStory({
  category: 'Components',
  name: 'Input',
  storyName: 'Input',
  component: Input,
  componentProps: () => ({
    'data-hook': 'storybook-input'
  }),
  source: InputSource
});
