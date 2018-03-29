import * as React from 'react';
import {LabelWithOptions} from '../src/components/LabelWithOptions'
import {generateOptions} from '../../wix-ui-label-with-options/packages/wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import * as LabelWithOptionsSource from '!raw-loader!../src/components/LabelWithOptions/LabelWithOptions.tsx';

const options = generateOptions();

export default {
  category: 'Components',
  storyName: 'LabelWithOptions',
  component: LabelWithOptions,
  source: LabelWithOptionsSource,
  componentPath: '../src/components/LabelWithOptions/LabelWithOptions.tsx',
  componentProps: {
    options,
    placeholder: 'Please select'
  },
  exampleProps: {
    placeholder: 'wtf'
  }
};
