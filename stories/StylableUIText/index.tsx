import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {UIText} from '../../src/components/StylableUIText';

export const story = () => storiesOf('Components', module)
  .add('StylableUIText', () => (
    <UIText appearance="T1.1" data-hook="storybook-uiText">
      Some text
    </UIText>
  ));
