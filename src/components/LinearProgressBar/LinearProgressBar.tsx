import * as React from 'react';
import {LinearProgressBar as UiCoreLinearProgressBar} from 'wix-ui-core/LinearProgressBar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import style from './LinearProgressBar.st.css';
import Check from 'wix-ui-icons-common/Check';

export interface LinearProgressBarProps {
  value: number;
  error?: boolean;
  showProgressIndication?: boolean;
  errorMessage?: string; 
  light?: boolean;
}

const preDefinedProps = {
  successIcon: <div className={style.successIcon}><FormFieldError /></div>,
  errorIcon: <div className={style.errorIcon}><FormFieldError /></div>
};



export const LinearProgressBar: React.SFC<LinearProgressBarProps> = (props) => {
  return (<UiCoreLinearProgressBar {...style('root')} {...{...props, ...preDefinedProps}} />)
}
