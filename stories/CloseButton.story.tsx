import * as React from 'react';
import {CloseButton} from '../src/components/CloseButton';
import * as CloseButtonSource from '!raw-loader!../src/components/CloseButton/CloseButton.tsx';

export default {
  category: 'Components',
  storyName: 'CloseButton',
  component: CloseButton,
  source: CloseButtonSource,
  componentPath: '../src/components/CloseButton/CloseButton.tsx',
  componentProps: setState => ({
    'data-hook': 'storybook-close-button'
  }),
};
