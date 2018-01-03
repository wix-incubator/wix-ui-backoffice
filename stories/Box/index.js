import createStory from '../create-story';

import Box from '../../src/components/Box';
import BoxSource from '!raw-loader!../../src/components/Box';

export const story = () => createStory({
  category: 'Components',
  name: 'Box',
  storyName: 'Box',
  component: Box,
  componentProps: () => ({
    children: ['Vertical', 'Box'],
    dataHook: 'storybook-box'
  }),
  source: BoxSource
});
