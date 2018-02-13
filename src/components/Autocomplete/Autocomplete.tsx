import * as React from 'react';
import style from './Autocomplete.st.css';
import {InputWithOptions} from 'wix-ui-core/InputWithOptions';
import {Option, OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';
import {InputProps} from 'wix-ui-core/Input';
import {Divider} from '../Divider';
import {Input} from '../Input';
import {func , bool, object, arrayOf, number, string, oneOfType, node} from 'prop-types';

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
  /** Makes the component disabled */
  disabled?: boolean;
  /** Input prop types */
  inputProps?: InputProps;
}

export interface AutocompleteState {
  inputValue: string;
  isEditing: boolean;
}

export class Autocomplete extends React.PureComponent<AutocompleteProps, AutocompleteState> {

  static propTypes = {
    /** The dropdown options array */
    options: arrayOf(object).isRequired,
    /** Handler for when an option is selected */
    onSelect: func,
    /** initial selected option ids */
    initialSelectedIds: oneOfType([arrayOf(number), arrayOf(string)]),
    /** An element that always appears at the top of the options */
    fixedHeader: node,
    /** An element that always appears at the bottom of the options */
    fixedFooter: node,
    /** Callback when the user pressed the Enter key or Tab key after he wrote in the Input field - meaning the user selected something not in the list  */
    onManualInput: func,
    /** Makes the component disabled */
    disabled: bool,
    /** Input prop types */
    inputProps: object
  };

  static createOption = createOption;
  static createDivider = (value: React.ReactNode = null) =>
    OptionFactory.createCustomDivider(value ? <Divider>{value}</Divider> : <Divider />)

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

  createInputProps() {
    let {inputProps} = this.props;
    const {inputValue} = this.state;

    inputProps = inputProps || {};
    inputProps.value = inputValue;
    inputProps.onChange = this.onInputChange;
    return inputProps;
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
        InputComponent={Input}
        inputProps={this.createInputProps()}
      />
    );
  }
}
