import {FullTextView} from '../src/components/FullTextView';

export default {
  category: 'Components',
  storyName: 'FullTextView',
  component: FullTextView,
  componentPath: '../src/components/FullTextView/FullTextView.tsx',

  componentProps: setState => ({
    'data-hook': 'storybook-fullTextView',
    children: 'some very long text',
    maxWidth: '50px'
  }),
};
