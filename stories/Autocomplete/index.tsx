import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Divider} from '../../src/components/Divider';
import {OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

const dropdownOptions =
  Array.from(Array(20))
    .map((x, index) => Autocomplete.createOption(index, false, true, `value${index}`));

dropdownOptions[2] = OptionFactory.create(2, true, false, `Disabled item`);
dropdownOptions[5] = OptionFactory.createCustomDivider(<Divider />);
dropdownOptions[8].value = 'This is a very very very very very long option';
dropdownOptions[12] = OptionFactory.createCustomDivider(<Divider>Divider</Divider>);

export const story = () => storiesOf('Components', module)
  .add('Autocomplete', () => (
    <div style={{width: '50px'}}>
      <Autocomplete
        onSelect={() => null}
        options={dropdownOptions}
        data-hook="story-autocomplete" />
    </div>
  ));
