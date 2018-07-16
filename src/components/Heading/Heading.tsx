import * as React from 'react';
import {oneOf, bool, Requireable, ValidationMap} from 'prop-types';
import omit = require('lodash/omit');
import {Omit} from '../../types/common';
import {Text as CoreText, TextProps as CoreTextProps} from '../core/CoreText';
import style from './Heading.st.css';
import {withStylable} from 'wix-ui-core/withStylable';
import { enumValues } from '../../utils';

export enum Appearance {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6'
};

export type TagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface Props extends Omit<CoreTextProps, 'tagName'> {
  /** is the text has dark or light skin */
  light?: boolean;

  /** typography of the heading */
  appearance?: Appearance;
}

export interface State { tagName: TagName; }

const defaultProps: Props = {
  appearance: Appearance.H1,
  light: false
};

const StyledText = withStylable<CoreTextProps, Props>(
  CoreText,
  style,
  ({light, appearance}) => ({light, appearance}),
  defaultProps
);

export class Heading extends React.PureComponent<Props, State> {
  static displayName = 'Heading';

  static propTypes = {
    ...omit<ValidationMap<CoreTextProps>>(CoreText.propTypes, ['tagName']),

    /** is the text has dark or light skin */
    light: bool,

    /** typography of the heading */
    appearance: oneOf(enumValues(Appearance))
  };

  static defaultProps: Props = defaultProps;

  state = {tagName: (this.props.appearance.toLowerCase()) as TagName}

  render() {
    return (
      <StyledText {...this.props} tagName={this.state.tagName}/>
    );
  }
}
