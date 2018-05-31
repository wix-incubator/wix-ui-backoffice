import * as React from 'react';
import {Text} from '../src/components/Text';
import {Heading} from '../src/components/Heading';

export default {
  category: 'Components',
  storyName: 'Text',
  component: Text,
  componentPath: '../src/components/Text/Text.tsx',
  displayName: 'Text',

  componentProps: {
    dataHook: 'storybook-text',
    children: 'Some text'
  },

  examples: (
    <div>
      <Heading>Multiline Example: </Heading>
      <Text>{'First line\nSecond line'}</Text>
    </div>
  )
};
