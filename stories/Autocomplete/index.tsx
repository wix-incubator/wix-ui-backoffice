import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Autocomplete} from '../../src/components/Autocomplete';
import {generateOptions} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionsExample';
import {Heading} from '../../src/components/Heading';
import {Input} from '../../src/components/Input';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {UIText} from '../../src/components/StylableUIText';
import {Option} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

type ControlledAutocompleteExampleState = {
  currentSelected: string;
  initialSelectedId?: string;
  withFixedHeader: boolean;
  withFixedFooter: boolean;
  manualInput: string;
  autoFocus: boolean;
  disabled: boolean;
  error: boolean;
  placeholder: string;
  size: Option;
  shouldDisplay: boolean;
};

const sizes = ['small', 'medium', 'large'].map(value => Autocomplete.createOption({value}));
const options = generateOptions((args = {}) => Autocomplete.createDivider(args.value));

class ControlledAutocompleteExample extends React.Component<{}, ControlledAutocompleteExampleState> {
  constructor() {
    super();

    this.rerenderComponent = this.rerenderComponent.bind(this);
    this.state = {
      currentSelected: 'No value.',
      initialSelectedId: '',
      withFixedHeader: false,
      withFixedFooter: false,
      manualInput: 'No value.',
      autoFocus: false,
      disabled: false,
      placeholder: '',
      error: false,
      size: sizes[1],
      shouldDisplay: true
    };
  }

  rerenderComponent() {
    this.setState({shouldDisplay: false}, () => this.setState({shouldDisplay: true}));
  }

  render() {
    const {
      currentSelected,
      initialSelectedId,
      withFixedHeader,
      withFixedFooter,
      manualInput,
      autoFocus,
      disabled,
      error,
      size,
      placeholder,
      shouldDisplay
    } = this.state;
    return (
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H3">onSelect: </Heading><UIText>{currentSelected}</UIText>
          <Heading appearance="H3">onManualInput: </Heading><UIText>{manualInput}</UIText>
          <Heading appearance="H3">initialSelectedId: </Heading><Input value={initialSelectedId} onChange={evt => this.setState({initialSelectedId: evt.target.value}, this.rerenderComponent)} />
          <Heading appearance="H3">fixedHeader: </Heading><ToggleSwitch checked={withFixedHeader} onChange={() => this.setState({withFixedHeader: !this.state.withFixedHeader})} />
          <Heading appearance="H3">fixedFooter: </Heading><ToggleSwitch checked={withFixedFooter} onChange={() => this.setState({withFixedFooter: !this.state.withFixedFooter})} />
          <Heading appearance="H3">autoFocus: </Heading><ToggleSwitch checked={autoFocus} onChange={() => this.setState({autoFocus: !this.state.autoFocus}, this.rerenderComponent)} />
          <Heading appearance="H3">disabled: </Heading><ToggleSwitch checked={disabled} onChange={() => this.setState({disabled: !this.state.disabled})} />
          <Heading appearance="H3">error: </Heading><ToggleSwitch checked={error} onChange={() => this.setState({error: !this.state.error})} />
          <Heading appearance="H3">placeholder: </Heading><Input value={placeholder} onChange={evt => this.setState({placeholder: evt.target.value})} />
          <Heading appearance="H3">size: </Heading><Autocomplete options={sizes} onSelect={option => this.setState({size: option})} initialSelectedId={this.state.size.id} />
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/>
          {
            shouldDisplay &&
              <Autocomplete
                data-hook="storybook-autocomplete"
                options={options}
                onSelect={option => this.setState({currentSelected: option.value})}
                initialSelectedId={parseInt(initialSelectedId)}
                fixedHeader={withFixedHeader ? <Heading appearance="H4">Fixed Header</Heading> : null}
                fixedFooter={withFixedFooter ? <Heading appearance="H4">Fixed Footer</Heading> : null}
                onManualInput={val => this.setState({manualInput: val})}
                autoFocus={autoFocus}
                disabled={disabled}
                error={error}
                errorMessage="This is an error message regarding the autocomplete"
                size={size.value as any}
                placeholder={placeholder}
            />
          }
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Autocomplete', () => (
      <ControlledAutocompleteExample />
  ));
