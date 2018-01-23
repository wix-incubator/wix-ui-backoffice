import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {InputWithOptions} from '../../src/components/InputWithOptions';

export const story = () => storiesOf('Components', module)
  .add('InputWithOptions', () => (
    <div style={{width: '50px'}}>
      <InputWithOptions options={[]} data-hook="story-input-with-options" />
    </div>
  ));
