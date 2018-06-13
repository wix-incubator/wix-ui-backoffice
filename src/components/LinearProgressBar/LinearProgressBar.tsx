import * as React from 'react';
import {LinearProgressBar as UiCoreLinearProgressBar} from 'wix-ui-core/LinearProgressBar';
import ToggleOn from 'wix-ui-icons-common/system/ToggleOn';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import style from './LinearProgressBar.st.css';
import {Tooltip} from '../Tooltip';

export interface LinearProgressBarProps {
  value: number;
  error?: boolean;
  showProgressIndication?: boolean;
  errorMessage?: string; 
  light?: boolean;
}

export const LinearProgressBar: React.SFC<LinearProgressBarProps> = (props) => {

  const iconProps = {
    successIcon: <div className={style.successIcon}><ToggleOn /></div>,
    errorIcon: <Tooltip placement="top" content={props.errorMessage}>
                 <div className={style.errorIcon}><FormFieldError /></div>
               </Tooltip>
  };
  return (
      <div className={style.progressBarContainer}>
        <UiCoreLinearProgressBar {...style('root', {light: props.light})} {...{...props, ...iconProps}} />
      </div>
    )
}
