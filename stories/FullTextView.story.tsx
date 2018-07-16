import {FullTextView} from '../src/components/FullTextView';

export default {
  category: 'Components',
  storyName: 'FullTextView',
  component: FullTextView,
  componentPath: '../src/components/FullTextView/FullTextView.tsx',

  componentProps: setState => ({
    'data-hook': 'storybook-fullTextView',
    children: 'Very long fancy and hardly fitting tab',
    maxWidth: '172px'
  }),
};
