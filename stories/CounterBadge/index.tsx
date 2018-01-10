import createStory from '../create-story';
import {CounterBadge} from '../../src/components/CounterBadge';
import * as CounterBadgeSource from '!raw-loader!../../src/components/CounterBadge/index.tsx';

export const story = () => createStory({
  category: 'Components',
  name: 'CounterBadge',
  storyName: 'CounterBadge',
  component: CounterBadge,
  componentProps: () => ({
    children: '12'
  }),
  source: CounterBadgeSource
});
