import {storiesOf} from '@storybook/react';
import {Heading} from '../../src/components/Heading';
import * as React from 'react';

export const story = () => storiesOf('Components', module)
  .add('Heading', () => (
    <div style={{width: '1000px', height: '500px'}}>
      <Heading appearance="H2" skin="dark" data-hook="storybook-heading">
        Some text
      </Heading>
    </div>
  ));
