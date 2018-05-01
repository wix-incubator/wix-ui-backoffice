import * as React from 'react';
import { string } from "prop-types";
import {Button as CoreButton, ButtonProps as CoreButtonProps} from 'wix-ui-core/Button';
import style from './Button.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export interface ButtonOwnProps extends CoreButtonProps {
  skin?: 'standard';
  priority?: 'primary';
  size?: 'medium';
}

const defaultProps :Partial<CoreButtonProps & ButtonOwnProps> ={
  skin: 'standard',
  priority: 'primary',
  size: 'medium'
}

export type ButtonProps = ButtonOwnProps & CoreButtonProps;

export const Button : React.SFC<ButtonProps> = props => {
  const {children, skin, priority, size, ...rest} = props;

  return (
    <CoreButton 
      {...rest}
      {...style('root',{skin,priority,size}, rest)}
    >
      {children}
    </CoreButton>
  )
}

Button.defaultProps = defaultProps;

Button.propTypes =  {
  skin: string,
  priority: string,
  size: string
}


