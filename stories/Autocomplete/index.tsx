import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Divider} from '../../src/components/Divider';
import {OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

const dropdownOptions =
  Array.from(Array(20))
    .map((x, index) =>
      index === 5 ?
      OptionFactory.createCustomDivider(<Divider />) :
      OptionFactory.create(index, index === 3, true, index === 15 ? 'This is a very very very very very long option' : `value${index}`));

export const story = () => storiesOf('Components', module)
  .add('Autocomplete', () => (
    <div style={{width: '50px'}}>
      <Autocomplete
        onSelect={() => null}
        options={dropdownOptions}
        data-hook="story-autocomplete" />
    </div>
  ));
