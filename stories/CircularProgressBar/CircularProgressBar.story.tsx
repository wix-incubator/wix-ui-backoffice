import { CircularProgressBar } from '../../src/components/CircularProgressBar'; 
import {Size} from '../../src/components/CircularProgressBar/constants';
import {enumValues} from '../../src/utils';

export default {
  category: 'Components',
  name: 'CircularProgressBar',
  storyName: 'CircularProgressBar',
  component: CircularProgressBar,

  componentProps: {
    errorMessage: 'some error message',
    value: 20,
    size: 'large',
    'data-hook': 'circular-progress-bar-story'
  },

  exampleProps: {
    size: enumValues(Size)
  }
}