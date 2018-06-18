import * as React from 'react';
import {Badge} from '../src/components/Badge';
import {SKIN, TYPE} from '../src/components/Badge/constants';

import Facebook from 'wix-ui-icons-common/Facebook';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';

const icons = [
  <ChevronDown key="0"/>,
  <Facebook key="0"/>
];

export default {
  category: 'Components',
  storyName: 'Badge',
  component: Badge,
  componentPath: '../src/components/Badge/Badge.tsx',

  componentProps: {
    children: 'I\'M A BADGE!',
    skin: 'general',
    type: 'solid'
  },

  exampleProps: {
    skin: Object.keys(SKIN),
    type: Object.keys(TYPE),
    prefixIcon: icons,
    suffixIcon: icons
  }
};
