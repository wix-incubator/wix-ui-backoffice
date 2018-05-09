import * as React from 'react';
import { HelperContent, HelperContentProps, ActionButtonTheme } from '../../src/components/FloatingHelper/HelperContent';

import { storySettings } from './StorySettings';
// import Image   = require('wix-ui-icons-common/Image');
import Image from 'wix-ui-icons-common/Image';


// Should match the exampleDataHooks from storySettings
const title = 'Don’t forget to setup payments';
const body = 'In order to sell your music you need to choose a payment method.';
const actionText = 'Ok, Take Me There';
const image = <div>🤔 blue</div>;
const image2 = <Image width="102" height="102" viewBox="4 4 18 18"/>;
const exampleProps = [
  { title },
  { body },
  { title, body },
  { title, body, actionText },
  { title, actionText },
  { body, actionText },
  { title, body, actionText, actionTheme: ActionButtonTheme.premium },
  { title, body, actionText , image: image2}
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

