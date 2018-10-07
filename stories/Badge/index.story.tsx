import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import * as ExampleBadgeOnClickRaw from '!raw-loader!./ExampleBadgeOnClick';
import ExampleBadgeOnClick from './ExampleBadgeOnClick';

import * as ExampleBadgesRaw from '!raw-loader!./ExampleBadges';
import ExampleBadges from './ExampleBadges';

import {SIZE, SKIN, TYPE} from '../../src/components/Badge/constants';

import Facebook from 'wix-ui-icons-common/Facebook';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import {Badge} from '../../src/components/Badge';

const icons = [
  <ChevronDown key="0"/>,
  <Facebook key="0"/>
];

export default {
  category: 'Components',
  storyName: 'Badge',
  component: Badge,
  componentPath: '../../src/components/Badge/Badge.tsx',

  componentProps: {
    children: 'I\'m a badge!',
    skin: 'general',
    type: 'solid',
    size: 'medium',
    uppercase: true,
    dataHook: 'storybook-badge'
  },

  exampleProps: {
    skin: Object.keys(SKIN),
    type: Object.keys(TYPE),
    size: Object.keys(SIZE),
    prefixIcon: icons,
    suffixIcon: icons
  },

  examples: (
    <div>
      <CodeExample title="With onClick" code={ExampleBadgeOnClickRaw}>
        <ExampleBadgeOnClick/>
      </CodeExample>

      <CodeExample title="Variations" code={ExampleBadgesRaw}>
        <ExampleBadges/>
      </CodeExample>
    </div>
  )
};
