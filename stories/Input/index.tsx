import createStory from '../create-story';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Input} from '../../src/components/Input';

export const story = () => storiesOf('Components', module)
  .add('Input', () => (
      <Input data-hook="storybook-input"/>
  ));
