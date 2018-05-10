import * as React from 'react';
import {LabelWithOptions as CoreLabelWithOptions, LabelWithOptionsProps as CoreLabelWithOptionsProps} from 'wix-ui-core/LabelWithOptions';
import {withStylable} from 'wix-ui-core/withStylable';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import style from './LabelWithOptions.st.css';
import {getInputSuffix} from '../Input/InputSuffixes';

export interface LabelWithOptionsProps {
  // The size of the LabelWithOptions
  size?: 'large' | 'medium' | 'small';
}

const defaultProps = {
  size: 'medium'
};

const StyledLabelWithOptions = withStylable<CoreLabelWithOptionsProps, LabelWithOptionsProps>(
  CoreLabelWithOptions,
  style,
  ({size}) => ({size}),
  defaultProps);

export type LabelWithOptionsType = React.SFC<CoreLabelWithOptionsProps & LabelWithOptionsProps> & {
  createOption: typeof CoreLabelWithOptions.createOption;
  createDivider: typeof CoreLabelWithOptions.createDivider;
};

const defaultSuffix = <span className={style.arrowIconSlot}><ChevronDown className={style.arrowIcon} /></span>;
const renderSuffix =
  ({isError, disabled}) => getInputSuffix({
    error: isError ? 'Selection is required!' : null,
    disabled,
    suffix: defaultSuffix});

export const LabelWithOptions: LabelWithOptionsType =
  ((props: CoreLabelWithOptionsProps & LabelWithOptionsProps) => {
    const {multi, ...restProps} = props;
    const {disabled} = props;
    return (
      <StyledLabelWithOptions
        renderSuffix={isError => renderSuffix({isError, disabled})}
        {...restProps}
      />
    );
  }) as LabelWithOptionsType;

LabelWithOptions.createOption = CoreLabelWithOptions.createOption;
LabelWithOptions.createDivider = CoreLabelWithOptions.createDivider;
LabelWithOptions.propTypes = CoreLabelWithOptions.propTypes;
