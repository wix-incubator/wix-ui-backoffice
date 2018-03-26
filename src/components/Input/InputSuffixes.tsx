import * as React from 'react';
import Exclamation from 'wix-ui-icons-common/Exclamation';
import {Tooltip} from '../Tooltip';
import style from './Input.st.css';

const getInputErrorSuffix = (errorMessage: string) => {
  if (!errorMessage) {
    return <div className={`${style.errorIconContainer} ${style.errorIconPosition}`}><Exclamation /></div>;
  }

  return (
    <Tooltip className={style.errorIconPosition} content={errorMessage}>
      <div className={style.errorIconContainer}><Exclamation /></div>
    </Tooltip>
  );
};

export const getInputSuffix = ({error, errorMessage, disabled, suffix}) => {
  if (!error || disabled) {
    return suffix;
  }

  return getInputErrorSuffix(errorMessage);
};
