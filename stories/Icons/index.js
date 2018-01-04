import React from 'react';
import {storiesOf} from '@storybook/react';
import CodeBlock from 'wix-storybook-utils/CodeBlock';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/components/Icons/README.md';

import AllIcons from './AllIcons';
import AllIconsRaw from '!raw-loader!./AllIcons';

import CustomeIcon from './CustomIcon';
import CustomeIconRaw from '!raw-loader!./CustomIcon';

import RTLIcon from './RTLIcon';
import RTLIconRaw from '!raw-loader!./RTLIcon';

const fixRawPath = path => path.replace('../../src/components', 'wix-ui-backoffice');

export const story = () => {
  storiesOf('Components', module)
    .add('Icons', () => (
      <div>
        <Markdown source={Readme}/>

        <Markdown source={'### Import all icons'}/>
        <CodeBlock source={`import * as Icons from 'wix-ui-backoffice/Icons';`}/>

        <Markdown source={'### Import specific icon'}/>
        <CodeBlock source={`import Add from 'wix-ui-backoffice/Icons/Add';`}/>

        <CodeExample title="All Icons" code={fixRawPath(AllIconsRaw)}>
          <AllIcons/>
        </CodeExample>
        <CodeExample title="Custom Icon" code={fixRawPath(CustomeIconRaw)}>
          <CustomeIcon/>
        </CodeExample>
        <CodeExample title="RTL Icon" code={fixRawPath(RTLIconRaw)}>
          <RTLIcon/>
        </CodeExample>
      </div>
    ));
};
