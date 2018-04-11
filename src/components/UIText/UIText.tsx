import * as React from 'react';
import {oneOf, bool, string, Requireable} from 'prop-types';
import {Text as CoreText, TextProps as CoreTextProps} from 'wix-ui-core/Text';
import {ThemedComponent} from 'wix-ui-theme';
import {ThemedComponentProps} from 'wix-ui-jss';
import {theme, Appearance} from './theme';
import {WixComponentProps} from 'wix-ui-core/dist/src/createHOC';

export type TagName = 'div' | 'span';

export interface UITextProps extends CoreTextProps {
  /** typography of the text */
  appearance?: Appearance;

  /** show ellipsis if needed */
  ellipsis?: boolean;

  /** hide title tooltip if ellipsis is enabled */
  forceHideTitle?: boolean;

  /** the tag name to be used */
  tagName?: TagName;

  dataClass?: string;
}

export class UIText extends React.PureComponent<UITextProps> {
  static propTypes = {
    /** typography of the text */
    appearance: oneOf([
      'T1', 'T1.1', 'T1.2', 'T1.3', 'T1.4', 'T1.5', 'T1.6', 'T1.7',
      'T2', 'T2.1', 'T2.2', 'T2.3', 'T2.4',
      'T3', 'T3.1', 'T3.2', 'T3.3', 'T3.4', 'T3.5', 'T3.6', 'T3.7',
      'T4', 'T4.1', 'T4.2', 'T4.3', 'T4.4', 'T4.5', 'T4.6', 'T4.7',
      'T5', 'T5.1'
    ]),

    /** show ellipsis if needed */
    ellipsis: bool,

    /** hide title tooltip if ellipsis is enabled */
    forceHideTitle: bool,

    /** the tag name to be used */
    tagName: oneOf(['div', 'span']),

    dataClass: string
  };

  static defaultProps: Partial<UITextProps> = {
    appearance: 'T1.1',
    dataClass: 'uitext'
  };

  render() {
    const {
      appearance,
      ellipsis,
      forceHideTitle,
      tagName,
      dataClass,
      children,
    } = this.props;

    return (
      <ThemedComponent {...{theme, appearance}}>
        <CoreText {...{forceHideTitle, ellipsis, tagName, dataClass}}>
          {children}
        </CoreText>
      </ThemedComponent>
    );
  }
}
