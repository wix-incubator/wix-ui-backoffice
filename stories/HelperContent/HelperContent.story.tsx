import * as React from 'react';
import { HelperContent, HelperContentProps } from '../../src/components/FloatingHelper/HelperContent/HelperContent';

import { storySettings } from './StorySettings';


// Should match the exampleDataHooks from storySettings
const exampleProps = [
  { title: 'Title' },
  { body: 'My Body' },
  { title: 'Title', body: 'My Body' },
  { title: 'Title', body: 'My Body', actionText: 'Click Me!' },
  { title: 'Title', actionText: 'Click Me!' },
  { body: 'My Body', actionText: 'Click Me!' },
];

const examples = exampleProps.map((props, index) => renderExample(storySettings.exampleDataHooks[index], props));

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: HelperContent,
  componentPath: '../../src/components/FloatingHelper/HelperContent/HelperContent.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    title: 'This is the title',
    body: 'This is the a long text which is passed in the `text` propterty'
  },
  examples: (
    <div>
      <h1>Examples</h1>
      {examples}
    </div>
  )

};


function renderExample(dataHook: string, props?: HelperContentProps) {
  return (
    <div style={{ marginTop: 20, marginBottom: 20, backgroundColor: 'black', width: '444px', padding: '36px 30px', borderRadius: '8px' }}>
      <HelperContent
        data-hook={dataHook}
        {...props}
      />
    </div>
  );
}

