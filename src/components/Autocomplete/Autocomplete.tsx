import * as React from 'react';
import style from './Autocomplete.st.css';
import {InputWithOptions, InputWithOptionsProps} from 'wix-ui-core/InputWithOptions';
import {Option, OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';

const createOption = (id: string | number, isDisabled: boolean, isSelectable: boolean, value: string) =>
  OptionFactory.create(
    id,
    isDisabled,
    isSelectable,
    value,
    val => <div className={style.option}>{val}</div>);

export interface AutocompleteProps {
  options: Array<Option>;
  onSelect: (option: Option) => void;
  initialInputValue?: string;
}

export interface AutocompleteState {
  inputValue: string;
}

export class Autocomplete extends React.PureComponent<AutocompleteProps, AutocompleteState> {

  static createOption = createOption;

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

  filterOptions(inputValue: string, options: Array<Option>): Array<Option> {
    const lowerValue = inputValue.toLowerCase();
    return options
    .filter((option: Option) =>
      (!option.isSelectable && option.value) ||
      (option.isSelectable && option.value && option.value.toLowerCase().includes(lowerValue)))
    .map((option: Option) =>
      option.isSelectable ? OptionFactory.createHighlighted(option, inputValue) : option);
  }

  render() {
    const {options} = this.props;
    const {inputValue} = this.state;
    const displayedOptions = inputValue ? this.filterOptions(inputValue, options) : options;

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
