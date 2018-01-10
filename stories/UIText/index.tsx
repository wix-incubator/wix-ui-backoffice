import createStory from '../create-story';
import {UIText} from '../../src/components/UIText';
import * as UITextSource from '!raw-loader!../../src/components/UIText/index.tsx';

export const story = () => createStory({
  category: 'Components',
  name: 'UIText',
  storyName: 'UIText',
  component: UIText,
  componentProps: () => ({
    appearance: 'T1.1',
    ellipsis: true,
    forceHideTitle: false,
    children: 'Some text',
    dataHook: 'storybook-ui-text'
  }),
  source: UITextSource
});
