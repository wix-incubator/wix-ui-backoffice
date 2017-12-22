import * as React from 'react';
import CoreHBox from 'wix-ui-core/HBox';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';

interface Props { // TODO: extend CoreHBoxProps
  spacing: string;
  verticalAlignment: 'left' | 'center' | 'right';
}

export default class HBox extends React.PureComponent<Props> {
  render() {
    const {spacing, verticalAlignment, ...coreProps} = this.props;

    return (
      <ThemedComponent {...{theme, spacing, verticalAlignment}}>
        <CoreHBox {...coreProps}/>
      </ThemedComponent>
    );
  }
}
