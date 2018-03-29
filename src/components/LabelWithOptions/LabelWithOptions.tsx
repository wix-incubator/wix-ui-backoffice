import * as React from 'react';
import {
  LabelWithOptions as CoreLabelWithOptions,
  LabelWithOptionsProps as CoreLabelWithOptionsProps
} from 'wix-ui-core/LabelWithOptions';
import {withStylable} from 'wix-ui-core/withStylable';
import style from './LabelWithOptions.st.css';
import {Tooltip} from '../Tooltip';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';

const StyledLabelWithOptions = withStylable<CoreLabelWithOptionsProps>(
  CoreLabelWithOptions,
  style
);

const renderSuffix = isInvalid => isInvalid ?
  <Tooltip content='Selection is required!' minWidth={200}><FormFieldError/></Tooltip> :
  <ChevronDown className={style.arrowIcon}/>;

export const LabelWithOptions =
  ((props: CoreLabelWithOptionsProps) => {
    return (
      <StyledLabelWithOptions
        renderSuffix={renderSuffix}
        {...props}
      />
    );
  });
