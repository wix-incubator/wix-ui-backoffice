import { LinearProgressBar } from '../../src/components/LinearProgressBar'; 

export default {
  category: 'Components',
  name: 'LinearProgressBar',
  storyName: 'LinearProgressBar',
  component: LinearProgressBar,

  componentProps: {
    errorMessage: 'some error message',
    value: 20,
    'data-hook': 'linear-progress-bar-story'
  }
}