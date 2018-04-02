import * as React from 'react';
import {oneOf, bool, Requireable} from 'prop-types';
import {Text as CoreText, TextProps as CoreTextProps} from 'wix-ui-core/StylableText';
import style from './Heading.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export type Appearance = 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
export type TagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface Props {
  /** is the text has dark or light skin */
  light?: boolean;

  /** typography of the heading */
  appearance?: Appearance;
}

export interface State { tagName: TagName; }

const defaultProps: Props = {
  appearance: 'H1',
  light: false
};

const StyledText = withStylable<CoreTextProps, Props>(
  CoreText,
  style,
  ({light, appearance}) => ({light, appearance}),
  defaultProps
);

export class Heading extends React.PureComponent<Props, State> {
  static propTypes = {
    ...CoreText.propTypes,

    /** is the text has dark or light skin */
    light: bool,

    /** typography of the heading */
    appearance: oneOf(['H1', 'H2', 'H3', 'H4', 'H5']),
  };

  static defaultProps: Props = defaultProps;

  constructor(props: Props) {
    super(props);
    this.state = {tagName: (props.appearance.toLowerCase()) as TagName};
  }

  render() {
    return (
      <StyledText {...this.props} tagName={this.state.tagName}/>
    );
  }
}
