import * as React from 'react';
import {Text} from '../src/components/Text';
import {Heading} from '../src/components/Heading';
import * as TextSource from '!raw-loader!../src/components/Text/Text.tsx';

export default {
  category: 'Components',
  storyName: 'Text',
  component: Text,
  source: TextSource,
  componentPath: '../src/components/Text/Text.tsx',

  componentProps: setState => ({dataHook: 'storybook-text'}),
  examples: 
    <div>
      <Heading>Multiline Example: </Heading>
      <Text>{`First line\nSecond line`}</Text>
    </div>
};
