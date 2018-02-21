import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Heading} from '../../src/components/Heading';

export const story = () => storiesOf('Components', module)
  .add('Heading', () => (
    <Heading appearance="H1" skin="dark" data-hook="storybook-stylable-heading">
      Some text
    </Heading>
  ));
