import createStory from '../create-story';
import Badge from '../../src/components/Badge';
import BadgeSource from '!raw-loader!../../src/components/Badge';

export const story = () => createStory({
  category: 'Components',
  name: 'Badge',
  storyName: 'Badge',
  component: Badge,
  componentProps: () => ({
    children: 'I\'M A BADGE!'
  }),
  source: BadgeSource
});
