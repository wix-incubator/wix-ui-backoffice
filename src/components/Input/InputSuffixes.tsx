import * as React from 'react';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import {Tooltip} from '../Tooltip';
import style from './Input.st.css';

const getInputErrorSuffix = (errorMessage: string) => {
  if (!errorMessage) {
    return <div className={`${style.errorIconContainer} ${style.errorIconPosition}`}><FormFieldError /></div>;
  }

  return (
    <Tooltip className={style.errorIconPosition} content={errorMessage}>
      <div className={style.errorIconContainer}><FormFieldError /></div>
    </Tooltip>
  );
};

export const getInputSuffix = ({error, errorMessage, disabled, suffix}) => {
  if (!error || disabled) {
    return suffix;
  }

  return getInputErrorSuffix(errorMessage);
};
