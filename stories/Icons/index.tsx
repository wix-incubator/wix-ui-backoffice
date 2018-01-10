import * as React from 'react';
import {storiesOf} from '@storybook/react';
import CodeBlock from 'wix-storybook-utils/CodeBlock';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

const Readme = require('./README.md');

import AllIcons from './AllIcons';
const AllIconsRaw = require('!raw-loader!./AllIcons');

import CustomeIcon from './CustomIcon';
const CustomeIconRaw = require('!raw-loader!./CustomIcon');

import RTLIcon from './RTLIcon';
const RTLIconRaw = require('!raw-loader!./RTLIcon');

const fixRawPath = raw => raw.replace('wix-ui-icons-common', 'wix-ui-backoffice/Icons');

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
