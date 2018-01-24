import createStory from '../create-story';
import {Checkbox} from '../../src/components/Checkbox';
import * as CheckboxSource from '!raw-loader!../../src/components/Checkbox/index.tsx';

export const story = () => createStory({
  category: 'Components',
  name: 'Checkbox',
  storyName: 'Checkbox',
  component: Checkbox,
  componentProps: (setState, getState) => ({
    checked: false,
    onChange: () => setState({checked: !getState().checked}),
    dataHook: 'storybook-checkbox'
  }),
  source: CheckboxSource
});
