import * as React from 'react';
import {oneOf} from 'prop-types';
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
  propTypes = {
    ...CoreInput.propTypes,

    /** size of the input component */
    size: oneOf(['small', 'medium', 'large']),

    /** Color schemes for the inpus component */
    skin: oneOf(['standard', 'error'])
  };

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
