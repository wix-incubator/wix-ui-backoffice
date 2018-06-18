import * as React from 'react';
import { Button, ButtonProps, ButtonSkin as Skin, ButtonPriority as Priority, ButtonSize as Size } from '../../src/components/Button';
import { storySettings } from './storySettings';
import {enumValues} from '../../src/utils';

function PButton(props: ButtonProps) {
  return (
    <div style={{ margin: '20px' }}>
      <Button {...props}>
        Click me please!
      </Button>
    </div>
  );
}

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: Button,
  componentPath: '../../src/components/Button/Button.tsx',

  componentProps: setState => ({
    'data-hook': storySettings.dataHook,
    children: ['Click me!'],
  }),

  exampleProps: {
    skin: enumValues(Skin),
    priority: enumValues(Priority),
    size: enumValues(Size)
  },

  examples: (
    <div style={{backgroundColor: '#f6f8fa', margin: '10px', padding: '16px'}}>
      <h1>Examples</h1>
      <h2>Primary</h2>
      <PButton skin={Skin.standard} priority={Priority.primary} />
      <PButton skin={Skin.white} priority={Priority.primary} />
      <PButton skin={Skin.destructive} priority={Priority.primary} />
      <PButton skin={Skin.premium} priority={Priority.primary} />
      <h2>Secondary</h2>
      <PButton skin={Skin.standard} priority={Priority.secondary} />
      <PButton skin={Skin.white} priority={Priority.secondary} />
      <PButton skin={Skin.destructive} priority={Priority.secondary} />
      <PButton skin={Skin.premium} priority={Priority.secondary} />
    </div>
  )
};
