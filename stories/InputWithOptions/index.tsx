import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {InputWithOptions} from '../../src/components/InputWithOptions';
import {OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

const dropdownOptions =
  Array.from(Array(20))
    .map((x, index) =>
      index === 5 ? OptionFactory.createDivider() : OptionFactory.create(index, index === 3, true, index === 15 ? 'fdsf sdf sdf sdf sdf sdfsd fsdf sdf ds' : `value${index}`));

export const story = () => storiesOf('Components', module)
  .add('InputWithOptions', () => (
    <div style={{width: '50px'}}>
      <InputWithOptions options={dropdownOptions} data-hook="story-input-with-options" />
    </div>
  ));
