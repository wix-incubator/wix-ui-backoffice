import * as React from 'react';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import {Tooltip} from '../Tooltip';
import style from './Input.st.css';

const getInputErrorSuffix = (error: boolean | string) => {
  if (error === true) {
    return <div className={`${style.errorIconContainer} ${style.errorIconPosition}`}><FormFieldError /></div>;
  }

  return (
    <Tooltip moveBy={{x: 0, y: 3}} className={style.errorIconPosition} content={error}>
      <div className={style.errorIconContainer}><FormFieldError /></div>
    </Tooltip>
  );
};

export const getInputSuffix = ({error, disabled, suffix}) => {
  if (!error || disabled) {
    return suffix;
  }

  return getInputErrorSuffix(error);
};
