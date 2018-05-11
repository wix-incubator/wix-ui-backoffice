import * as React from 'react';
import {LabelWithOptions, LabelWithOptionsProps} from '../LabelWithOptions';
import {Option} from 'wix-ui-core/dist/src/baseComponents/DropdownOption';

//TODO - use https://github.com/pelotom/type-zoo
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type MultiSelectProps = Omit<Omit<Omit<Omit<Omit<Omit<LabelWithOptionsProps,
  'multi'>,
  'ellipsis'>,
  'renderSuffix'>,
  'fixedHeader'>,
  'fixedFooter'>,
  'checkbox'>;

export const MultiSelect: React.SFC<MultiSelectProps> = ({...restProps}) => (
  <LabelWithOptions {...restProps} multi checkbox ellipsis/>
);

MultiSelect.displayName = 'MultiSelect';
export const createOption = LabelWithOptions.createOption;
export const createDivider = LabelWithOptions.createDivider;

