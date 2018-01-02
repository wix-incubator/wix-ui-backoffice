import * as React from 'react';
import CoreVBox from 'wix-ui-core/VBox';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';
import {Alignment} from './constants';

interface Props {  // TODO: extend CoreVBoxProps
  spacing?: string;
  horizontalAlignment?: Alignment;
}

export default class VBox extends React.PureComponent<Props> {
  render() {
    const {spacing, horizontalAlignment, ...coreProps} = this.props;
    return (
      <ThemedComponent {...{theme, spacing, horizontalAlignment}}>
        <CoreVBox {...coreProps}/>
      </ThemedComponent>
    );
  }
}
