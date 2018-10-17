import * as React from 'react';
import {Badge} from '../../src/components/deprecated/Badge';

export default () => (
  <Badge onClick={() => alert('Clicked!')}>
    I'm a badge!
  </Badge>
);
