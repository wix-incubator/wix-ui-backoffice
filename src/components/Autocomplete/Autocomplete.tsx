import * as React from 'react';
import style from './Autocomplete.st.css';
import {InputWithOptions, InputWithOptionsProps} from 'wix-ui-core/InputWithOptions';
import {Option, OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';
import {InputProps} from 'wix-ui-core/Input';

const createOption = (id: string | number, isDisabled: boolean, isSelectable: boolean, value: string) =>
  OptionFactory.create(
    id,
    isDisabled,
    isSelectable,
    value,
    val => <div className={style.option}>{val}</div>);

export interface AutocompleteProps {
  /** The dropdown options array */
  options: Array<Option>;
  /** Handler for when an option is selected */
  onSelect?: (option: Option) => void;
  /** initial selected option ids */
  initialSelectedIds?: Array<string | number>;
  /** An element that always appears at the top of the options */
  fixedHeader?: React.ReactNode;
  /** An element that always appears at the bottom of the options */
  fixedFooter?: React.ReactNode;
  /** Callback when the user pressed the Enter key or Tab key after he wrote in the Input field - meaning the user selected something not in the list  */
  onManualInput?: (value: string) => void;
  /** Input prop types */
  inputProps?: InputProps;
}

export interface AutocompleteState {
  inputValue: string;
  isEditing: boolean;
}

export class Autocomplete extends React.PureComponent<AutocompleteProps, AutocompleteState> {

  static createOption = createOption;

  constructor(props: AutocompleteProps) {
    super(props);

    this.state = {
      isEditing: false,
      inputValue: (props.inputProps && props.inputProps.value) || ''
    };

    this.onSelect = this.onSelect.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onEditingChanged = this.onEditingChanged.bind(this);
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

  onEditingChanged(isEditing: boolean) {
    if (this.state.isEditing !== isEditing) {
      this.setState({isEditing});
    }
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
    const {inputValue, isEditing} = this.state;
    const displayedOptions =
      inputValue && isEditing ? this.filterOptions(inputValue, options) : options;

    return (
      <InputWithOptions
        {...style('root', {}, this.props)}
        onSelect={this.onSelect}
        options={displayedOptions}
        onEditingChanged={this.onEditingChanged}
        inputProps={{
          value: inputValue,
          onChange: this.onInputChange
        }}
      />
    );
  }
}
