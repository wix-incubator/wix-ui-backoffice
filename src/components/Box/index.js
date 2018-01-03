import React from 'react';
import {oneOf, string} from 'prop-types';
import CoreBox from 'wix-ui-core/Box';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';

const Box = ({spacing, crossAxisAlignment, ...coreProps}) => (
  <ThemedComponent theme={theme} spacing={spacing} crossAxisAlignment={crossAxisAlignment}>
    <CoreBox {...coreProps}/>
  </ThemedComponent>
);

Box.propTypes = {
  ...CoreBox.propTypes,

  /** spacing between the elements */
  spacing: string,

  /** sets alignment on secondary axis */
  crossAxisAlignment: oneOf(['start', 'center', 'end'])
};

export default Box;
