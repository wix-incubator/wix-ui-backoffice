import * as React from 'react';
import {oneOf, bool, Requireable} from 'prop-types';
import omit = require('lodash/omit');
import {Text as CoreText, TextProps as CoreTextProps} from '../core/CoreText';
import style from './Heading.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export enum Appearance {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4'
};
export type TagName = 'h1' | 'h2' | 'h3' | 'h4';

export interface Props {
  /** any nodes to be rendered (usually text nodes) */
  children?: React.ReactNode;

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

const legalPropTypes = omit(CoreText.propTypes, 'tagName');

export class Heading extends React.PureComponent<Props, State> {
  static displayName = 'Heading';

  static propTypes = {
    ...legalPropTypes,

    /** is the text has dark or light skin */
    light: bool,

    /** typography of the heading */
    appearance: oneOf(['H1', 'H2', 'H3', 'H4'])
  };

  static defaultProps: Props = defaultProps;

  state = {tagName: (this.props.appearance.toLowerCase()) as TagName}

  render() {
    return (
      <StyledText {...this.props} tagName={this.state.tagName}/>
    );
  }
}
