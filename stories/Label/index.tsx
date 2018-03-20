import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Label} from '../../src/components/Label';

export const story = () => storiesOf('Components', module)
  .add('Label', () => (
    <Label appearance="T1.1" data-hook="storybook-label">
      Some text
    </Label>
  ));
