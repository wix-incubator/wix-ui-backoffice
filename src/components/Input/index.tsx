import * as React from 'react';
import CoreInput from 'wix-ui-core/Input';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';

interface Props { // TODO: extend CoreInputProps,
  /** size of the input component */
  size?: 'small' | 'medium' | 'large';

  /** Color schemes for the inpus component */
  skin?: 'standard' | 'error';
}

export default class Input extends React.PureComponent<Props> {
  static defaultProps = {
    size: 'medium',
    skin: 'standard'
  };

  render() {
    const {size, skin, ...coreProps} = this.props;

    return (
      <ThemedComponent {...{theme, size, skin}}>
        <CoreInput {...coreProps}/>
      </ThemedComponent>
    );
  }
}
