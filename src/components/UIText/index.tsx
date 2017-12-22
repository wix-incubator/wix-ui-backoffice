import * as React from 'react';
// import {oneOf, bool, string} from 'prop-types';
import CoreText from 'wix-ui-core/Text';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';

export type Appearance =
  'T1' | 'T1.1' | 'T1.2' | 'T1.3' | 'T1.4' | 'T1.5' | 'T1.6' | 'T1.7' |
  'T2' | 'T2.1' | 'T2.2' | 'T2.3' | 'T2.4' |
  'T3' | 'T3.1' | 'T3.2' | 'T3.3' | 'T3.4' | 'T3.5' | 'T3.6' | 'T3.7' |
  'T4' | 'T4.1' | 'T4.2' | 'T4.3' | 'T4.4' | 'T4.5' | 'T4.6' | 'T4.7' |
  'T5' | 'T5.1';

  interface Props { // TODO: import CoreTextProps adn extend it when wix-ui-core will expose it
  /** typography of the text */
  appearance?: Appearance;

  /** show ellipsis if needed */
  ellipsis?: boolean;

  /** hide title tooltip if ellipsis is enabled */
  forceHideTitle?: boolean;

  /** the tag name to be used */
  tagName?: 'div' | 'span';

  dataClass?: string;
}

export default class UIText extends React.PureComponent<Props> {
  static defaultProps = {
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
