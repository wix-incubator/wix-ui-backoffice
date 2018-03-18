import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import {Heading} from '../../src/components/Heading';
import {Input} from '../../src/components/Input';
import {ToggleSwitch} from '../../src/components/StylableToggleSwitch';
import {UIText} from '../../src/components/StylableUIText';

type ControlledAutocompleteExampleState = {
  currentSelected: string;
  initialSelectedId?: string;
  withFixedHeader: boolean;
  withFixedFooter: boolean;
  manualInput: string;
  placeholder: string;
  disabled: boolean;
};

class ControlledAutocompleteExample extends React.Component<{}, ControlledAutocompleteExampleState> {
  constructor() {
    super();

    this.state = {
      currentSelected: 'No value.',
      initialSelectedId: '',
      withFixedHeader: false,
      withFixedFooter: false,
      manualInput: 'No value.',
      placeholder: '',
      disabled: false,
    };
  }

  render() {
    const {
      currentSelected,
      initialSelectedId,
      withFixedHeader,
      withFixedFooter,
      manualInput,
      placeholder,
      disabled
    } = this.state;
    return (
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H3">onSelect: </Heading><UIText>{currentSelected}</UIText>
          <Heading appearance="H3">onManualInput: </Heading><UIText>{manualInput}</UIText>
          <Heading appearance="H3">initialSelectedId: </Heading><Input size="small" value={initialSelectedId} onChange={evt => this.setState({initialSelectedId: evt.target.value})} />
          <Heading appearance="H3">fixedHeader: </Heading><ToggleSwitch checked={withFixedHeader} onChange={() => this.setState({withFixedHeader: !this.state.withFixedHeader})} />
          <Heading appearance="H3">fixedFooter: </Heading><ToggleSwitch checked={withFixedFooter} onChange={() => this.setState({withFixedFooter: !this.state.withFixedFooter})} />
          <Heading appearance="H3">placeholder: </Heading><Input size="small" value={placeholder} onChange={evt => this.setState({placeholder: evt.target.value})} />
          <Heading appearance="H3">disabled: </Heading><ToggleSwitch checked={disabled} onChange={() => this.setState({disabled: !this.state.disabled})} />
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/>
          <Autocomplete
            data-hook="storybook-autocomplete"
            options={generateOptions((args = {}) => Autocomplete.createDivider(args.value))}
            onSelect={option => this.setState({currentSelected: option.value})}
            initialSelectedId={initialSelectedId}
            fixedHeader={withFixedHeader ? <Heading appearance="H4">Fixed Header</Heading> : null}
            fixedFooter={withFixedFooter ? <Heading appearance="H4">Fixed Footer</Heading> : null}
            onManualInput={value => this.setState({manualInput: value})}
            disabled={disabled}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Autocomplete', () => (
      <ControlledAutocompleteExample />
  ));
