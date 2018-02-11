import {Divider as CoreDivider, DividerProps as CoreDividerProps} from 'wix-ui-core/Divider';
import style from './Divider.st.css';
import {withStylable} from 'wix-ui-core';

export const Divider = withStylable<CoreDividerProps, {}>(
  CoreDivider,
  style,
  () => ({})
);
