import {storiesOf} from '@storybook/react';
import {Heading} from '../../src/components/Heading';
import * as React from 'react';

export const story = () => storiesOf('Components', module)
  .add('Heading', () => (
    <Heading appearance="H1" skin="dark" data-hook="storybook-heading">
      Some text
    </Heading>
  ));
