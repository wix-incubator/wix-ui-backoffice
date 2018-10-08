import * as React from 'react';
import {Badge} from '../../src/components/Badge';

export default () => (
  <Badge onClick={() => alert('Clicked!')}>
    I'm a badge!
  </Badge>
);
