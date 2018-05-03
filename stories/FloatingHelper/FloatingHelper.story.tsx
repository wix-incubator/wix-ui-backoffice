import * as React from 'react';
import {FloatingHelper, FloatingHelperProps} from '../../src/components/FloatingHelper';
import {HelperContent} from '../../src/components/FloatingHelper/HelperContent/HelperContent';

import {storySettings} from './StorySettings';


// Should match the exampleDataHooks from storySettings
const exampleProps = [
  {content:<HelperContent key="0" title="Title"/>},
  {content:<HelperContent key="1" body="My Body"/>},
  {content:<HelperContent key="2" title="Title" body="My Body"/>},
  {content:<HelperContent key="3" title="Title" body="My Body" actionText="Click Me!"/>},
  {content:<HelperContent key="4" title="Title" actionText="Click Me!"/>},
  {content:<HelperContent key="5" body="My Body" actionText="Click Me!"/>},
];

const examples = exampleProps.map((props,index) => renderExample(storySettings.exampleDataHooks[index], props));

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: FloatingHelper,
  componentPath: '../../src/components/FloatingHelper/FloatingHelper.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    content: (
      <HelperContent
        title="This is the title"
        body="This is the a long text which is passed in the `text` propterty"
      />),
    children: <span>I am a FloatingHelper target</span>,
    placement: 'right'
  },
  exampleProps: {
    content: exampleProps.map(p=> p.content)
  },
  examples: (
    <div>
      <h1>Examples</h1>
      {examples}
    </div>
  )

};


function renderExample(dataHook: string, props?: Partial<FloatingHelperProps> ) {
  return (
    <div style={{marginTop: 150, marginBottom: 150}}>
      <FloatingHelper
        data-hook={dataHook}
        placement="right"
        width="666px"
        content={<HelperContent/>}
        children={<span>I am a long long long long long long long long FloatingHelper target</span>}
        {...props}
      />
    </div>
  );
}

