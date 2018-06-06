import * as React from 'react';
import { FloatingHelperContent, FloatingHelperContentProps, ActionButtonTheme } from '../../src/components/FloatingHelper/FloatingHelperContent';
import { storySettings } from './StorySettings';
import Image from 'wix-ui-icons-common/Image';

const title = 'Don’t forget to setup payments';
const body = 'In order to sell your music you need to choose a payment method.';
const action = {actionText: 'Ok, Take Me There', onActionClick: ()=>null};
const image = <Image width="102" height="102" viewBox="4 4 18 18"/>;

// Should match the exampleDataHooks from storySettings
const exampleProps : FloatingHelperContentProps[]= [
  { body },
  { title, body },
  { title, body, ...action },
  { body, ...action },
  { title, body, ...action, actionTheme: ActionButtonTheme.premium },
  { title, body, ...action , image},
  { body, image}
];

const componentProps: FloatingHelperContentProps  & {'data-hook': string} = {
  'data-hook': storySettings.dataHook,
  title: 'This is the title',
  body: 'This is the a long text which is passed in the `text` propterty',
  actionText: 'Click me!',
}

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: FloatingHelperContent,
  exampleImport: 'import ... - do not import directly, use FloatingHelper.Content',
  componentPath: '../../src/components/FloatingHelper/FloatingHelperContent/FloatingHelperContent.tsx',
  componentProps,
  exampleProps: {
    onActionClick: ()=>{/** see interactive preview*/ },
    actionTheme: Object.keys(ActionButtonTheme).map(key=>ActionButtonTheme[key]),
    image: [{label: 'with image', value: image}]
  },
  examples: (
    <div>
      <h1>Examples</h1>
      {exampleProps.map((props, index) => renderExample(storySettings.exampleDataHooks[index], props))}
    </div>
  )
};


function renderExample(dataHook: string, props?: FloatingHelperContentProps) {
  return (
    <div style={{ marginTop: 20, marginBottom: 20, backgroundColor: 'black', width: '444px', padding: '36px 30px', borderRadius: '8px' }}>
      <FloatingHelperContent
        data-hook={dataHook}
        {...props}
      />
    </div>
  );
}

