import * as React from 'react';
import {VBox as CoreVBox, VBoxProps as CoreVBoxProps} from 'wix-ui-core/VBox';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import {Alignment} from './constants';

interface VBoxProps extends CoreVBoxProps {
  spacing?: string;
  horizontalAlignment?: Alignment;
}

export class VBox extends React.PureComponent<VBoxProps> {
  render() {
    const {spacing, horizontalAlignment, ...coreProps} = this.props;
    return (
      <ThemedComponent {...{theme, spacing, horizontalAlignment}}>
        <CoreVBox {...coreProps}/>
      </ThemedComponent>
    );
  }
}
