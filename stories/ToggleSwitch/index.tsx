import createStory from '../create-story';

import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import * as ToggleSwitchSource from '!raw-loader!../../src/components/ToggleSwitch/index.tsx';

export const story = () => createStory({
  category: 'Components',
  name: 'ToggleSwitch',
  storyName: 'ToggleSwitch',
  component: ToggleSwitch,
  componentProps: (setState, getState) => ({
    checked: false,
    children: 'Toggle',
    onChange: () => setState({checked: !getState().checked})
  }),
  source: ToggleSwitchSource
});
