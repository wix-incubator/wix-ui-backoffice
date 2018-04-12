import {Label} from '../src/components/Label';
import * as LabelSource from '!raw-loader!../src/components/Label/Label.tsx';

export default {
  category: 'Components',
  storyName: 'Label',
  component: Label,
  source: LabelSource,
  componentPath: '../src/components/Label/Label.tsx',
  componentProps: setState => ({
    'data-hook': 'storybook-label',
    children: 'Some label',
    size: 'medium'
  }),
  exampleProps: {
    size: ['small', 'medium'],
    children: 'Some label'
  }
};
