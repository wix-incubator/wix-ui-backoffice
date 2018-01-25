import {Divider as CoreDivider, DividerProps as CoreDividerProps} from 'wix-ui-core/Divider';
import style from './Divider.st.css';
import {withStylable} from 'wix-ui-core';

export interface DividerProps {
  skin?: 'standard' | 'error' | 'success';
  size?: 'large' | 'small' | 'x-small';
}

const defaultProps = {
  skin: 'standard',
  size: 'large'
};

export const Divider = withStylable<CoreDividerProps, DividerProps>(
  CoreDivider,
  style,
  ({skin, size}) => ({[size]: true, [skin]: true}),
  defaultProps
);
