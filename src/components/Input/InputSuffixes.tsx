import * as React from 'react';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import {Tooltip} from '../Tooltip';
import style from './Error.st.css';

const ErrorComponent = () => (
  <div {...style('root')}>
    <FormFieldError />
  </div>
);

const getInputErrorSuffix = (error: boolean | string) => {
  if (error === true) {
    return <ErrorComponent/>;
  }

  return (
    <Tooltip moveBy={{x: 0, y: 3}} content={error}>
      <ErrorComponent/>
    </Tooltip>
  );
};

export const getInputSuffix = ({error, disabled, suffix}) => {
  if (!error || disabled) {
    return suffix;
  }

  return getInputErrorSuffix(error);
};
