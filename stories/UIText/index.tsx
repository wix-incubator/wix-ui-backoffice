import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {UIText} from '../../src/components/UIText';

export const story = () => storiesOf('Components', module)
  .add('UIText', () => (
    <UIText appearance="T1.1" data-hook="storybook-uiText">
      Some text
    </UIText>
  ));
