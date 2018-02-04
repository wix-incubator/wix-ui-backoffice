import * as React from 'react';
import style from './Autocomplete.st.css';
import {InputWithOptions, InputWithOptionsProps} from 'wix-ui-core/InputWithOptions';
import {withStylable} from 'wix-ui-core';
import {Option, OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';

export interface AutocompleteProps {
  options: Array<Option>;
  onSelect: (option: Option) => void;
  initialInputValue?: string;
}

export interface AutocompleteState {
  inputValue: string;
}

export class Autocomplete extends React.PureComponent<AutocompleteProps, AutocompleteState> {
  constructor(props: AutocompleteProps) {
    super(props);

    this.state = {
      inputValue: props.initialInputValue || ''
    };

    this.onSelect = this.onSelect.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value
    });
  }

  onSelect(option: Option) {
    this.setState({
      inputValue: option.value
    });

    const {onSelect} = this.props;
    onSelect(option);
  }

  render() {
    const {options} = this.props;
    const {inputValue} = this.state;
    const lowerValue = inputValue.toLowerCase();
    const displayedOptions =
    options
        .filter((option: Option) => !option.value || option.value.toLowerCase().includes(lowerValue))
        .map((option: Option, index: number) =>
          OptionFactory.createHighlighted(option, inputValue));

    return (
      <InputWithOptions
        {...style('root', {}, this.props)}
        onSelect={this.onSelect}
        options={displayedOptions}
        inputProps={{
          value: inputValue,
          onChange: this.onInputChange
        }}
      />
    );
  }
}
