import * as React from 'react';
import {HBox as CoreHBox, HBoxProps as CoreHBoxProps} from 'wix-ui-core/HBox';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import {Alignment} from './constants';

interface HBoxProps extends CoreHBoxProps {
  spacing?: string;
  verticalAlignment?: Alignment;
}

export class HBox extends React.PureComponent<HBoxProps> {
  render() {
    const {spacing, verticalAlignment, ...coreProps} = this.props;

    return (
      <ThemedComponent {...{theme, spacing, verticalAlignment}}>
        <CoreHBox {...coreProps}/>
      </ThemedComponent>
    );
  }
}
