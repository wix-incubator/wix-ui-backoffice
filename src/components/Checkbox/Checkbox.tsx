import * as React from 'react';
import {Checkbox as CoreCheckbox, CheckboxProps as CoreCheckboxProps} from 'wix-ui-core/Checkbox';
import {CheckboxChecked, CheckboxIndeterminate} from 'wix-ui-icons-common/system/';
import style from './Checkbox.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export interface CheckboxProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

const defaultProps = {
  skin: 'standard',
  size: 'large',
  checkedIcon: <CheckboxChecked className={style.tickIcon} />,
  indeterminateIcon: <CheckboxIndeterminate className={style.indeterminateIcon} />
};

export const Checkbox = withStylable<CoreCheckboxProps, {}>(
  CoreCheckbox,
  style,
  () => null,
  defaultProps
);
