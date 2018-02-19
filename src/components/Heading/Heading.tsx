import * as React from 'react';
import {oneOf} from 'prop-types';
import {Text as CoreText, TextProps as CoreTextProps} from 'wix-ui-core/Text';
import style from './Heading.st.css';
import {withStylable} from 'wix-ui-core';
import {Color} from '../../colors';

interface ColorsConfig {
  dark: Color;
  light: Color;
}

export type Appearance = 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
export type Skin = keyof ColorsConfig;

interface Props {
  /** skin color of the heading */
  skin?: Skin;

  /** typography of the heading */
  appearance?: Appearance;
}

interface State {
  tagName: string;
}

const defaultProps: Props = {
  appearance: 'H1',
  skin: 'dark'
};

const StyledText = withStylable<CoreTextProps, Props>(
  CoreText,
  style,
  ({skin, appearance}) => ({[skin]: true, [appearance]: true}),
  defaultProps
);

export class Heading extends React.PureComponent<Props, State> {
  static propTypes = {
    ...CoreText.propTypes,

    /** skin color of the heading */
    skin: oneOf(['dark', 'light']),

    /** typography of the heading */
    appearance: oneOf(['H1', 'H2', 'H3', 'H4', 'H5']),
  };

  static defaultProps: Props = defaultProps;

  constructor(props: Props) {
    super(props);
    this.state = {tagName: props.appearance.toLowerCase()};
  }

  render() {
    const {appearance, skin, ...rest} = this.props;
    return (
    <StyledText {...rest} tagName={this.state.tagName}/>
    );
  }
}
