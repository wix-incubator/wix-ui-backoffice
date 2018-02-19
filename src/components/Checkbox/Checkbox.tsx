import {Checkbox as CoreCheckbox, CheckboxProps as CoreCheckboxProps} from 'wix-ui-core/Checkbox';
import {CheckboxChecked, CheckboxIndeterminate} from 'wix-ui-icons-common/system/';
import style from './Checkbox.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

const defaultProps = {
  tickIcon: CheckboxChecked({width: '9px', height: '9px'}),
  indeterminateIcon: CheckboxIndeterminate({width: '8px', height: '8px'})
};

export const Checkbox = withStylable<CoreCheckboxProps, {}>(
  CoreCheckbox,
  style,
  () => null,
  defaultProps
);
