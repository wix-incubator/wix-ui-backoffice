import { CircularProgressBar } from '../../src/components/CircularProgressBar'; 

export default {
  category: 'Components',
  name: 'CircularProgressBar',
  storyName: 'CircularProgressBar',
  component: CircularProgressBar,

  componentProps: {
    errorMessage: 'some error message',
    value: 20,
  },

  exampleProps: {
    size: ['small', 'medium', 'large'],
  }
}