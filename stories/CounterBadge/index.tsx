import createStory from '../create-story';
import CounterBadge from '../../src/components/CounterBadge';
import CounterBadgeSource from '!raw-loader!../../src/components/CounterBadge';

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
