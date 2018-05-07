import createStory from '../create-story';
import {TimePicker} from '../../src/components/TimePicker';
import * as TimePickerSource from '!raw-loader!../../src/components/TimePicker/TimePicker.tsx';

export const story = () => createStory({
  category: 'Components',
  name: 'TimePicker/TimePicker.tsx',
  storyName: 'TimePicker',
  component: TimePicker,
  componentProps: (setState, getState) => ({
    onChange: (value) => setState({value})
  }),
  source: TimePickerSource
});
