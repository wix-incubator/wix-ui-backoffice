import * as React from 'react';
import style from './Autocomplete.st.css';
import {InputWithOptions} from 'wix-ui-core/InputWithOptions';
import {Option, OptionFactory} from 'wix-ui-core/dist/src/baseComponents/DropdownOption/OptionFactory';
import {InputProps} from 'wix-ui-core/Input';
import {Divider} from '../Divider';
import {func , bool, object, arrayOf, number, string, oneOfType, node, oneOf} from 'prop-types';

const createDivider = (value = null) =>
  OptionFactory.createCustomDivider(value ? <Divider>{value}</Divider> : <Divider />);

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
  /** Input size */
  size?: 'large' | 'small' | 'x-small';
}

export interface AutocompleteState {
  inputValue: string;
  isEditing: boolean;
}

export class Autocomplete extends React.PureComponent<AutocompleteProps, AutocompleteState> {

  static defaultProps = {
    size: 'large'
  };

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
    /** Input prop types */
    inputProps: object,
    /** Input size */
    size: oneOf(['large', 'small', 'x-small'])
  };

  static createOption = OptionFactory.create;
  static createDivider = createDivider;

  constructor(props: AutocompleteProps) {
    super(props);

    this.state = {
      isEditing: false,
      inputValue: (props.inputProps && props.inputProps.value) || ''
    };

    this._onSelect = this._onSelect.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this._onEditingChanged = this._onEditingChanged.bind(this);
  }

  _onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: event.target.value
    });
  }

  _onSelect(option: Option) {
    this.setState({
      inputValue: option.value
    });

    const {onSelect} = this.props;
    onSelect && onSelect(option);
  }

  _onEditingChanged(isEditing: boolean) {
    if (this.state.isEditing !== isEditing) {
      this.setState({isEditing});
    }
  }

  _filterOptions(inputValue: string, options: Array<Option>): Array<Option> {
    const lowerValue = inputValue.toLowerCase();
    return options
    .filter((option: Option) =>
      (!option.isSelectable && option.value) ||
      (option.isSelectable && option.value && option.value.toLowerCase().includes(lowerValue)))
    .map((option: Option) =>
      option.isSelectable && option.value ? OptionFactory.createHighlighted(option, inputValue) : option);
  }

  _createInputProps() {
    let {inputProps} = this.props;
    const {inputValue} = this.state;

    inputProps = inputProps || {};
    inputProps.value = inputValue;
    inputProps.onChange = this._onInputChange;
    inputProps.className = `${style.input} ${inputProps.className ? inputProps.className : ''}`.trim();
    return inputProps;
  }

  render() {
    const {options, initialSelectedIds, fixedHeader, fixedFooter, onManualInput, size} = this.props;
    const {inputValue, isEditing} = this.state;
    const inputProps = this._createInputProps();
    const displayedOptions =
      inputValue && isEditing ? this._filterOptions(inputValue, options) : options;

    return (
      <InputWithOptions
        {...style('root', {size}, this.props)}
        onSelect={this._onSelect}
        initialSelectedIds={initialSelectedIds}
        fixedHeader={fixedHeader}
        fixedFooter={fixedFooter}
        onManualInput={onManualInput}
        options={displayedOptions}
        onEditingChanged={this._onEditingChanged}
        inputProps={inputProps}
      />
    );
  }
}
