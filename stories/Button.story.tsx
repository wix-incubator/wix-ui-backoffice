import * as React from 'react';
import { Button, ButtonProps, ButtonSkin as Skin, ButtonPriority as Priority, ButtonSize as Size } from '../src/components/Button';
import * as ButtonSource from '!raw-loader!../src/components/Button/Button.tsx';


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
  category: 'Components',
  storyName: 'Button',
  component: Button,
  source: ButtonSource,
  componentPath: '../src/components/Button/Button.tsx',
  componentProps: setState => ({
    'data-hook': 'storybook-button',
    children: ['Click me!'],
  }),
  exampleProps: {
    skin: ['standard', 'white']
  },
  examples: (
    <div>
      <h1>Examples</h1>
      <h2>Primary</h2>
      <PButton skin={Skin.standard} priority={Priority.primary} />
      <PButton skin={Skin.white} priority={Priority.primary} />
      <PButton skin={Skin.destructive} priority={Priority.primary} />
      <PButton skin={Skin.premium} priority={Priority.primary} />
      <h2>Secondary</h2>
      <div style={{ backgroundColor: 'grey', marginTop: '20px' }}>
        <PButton skin={Skin.standard} priority={Priority.secondary} />
        <PButton skin={Skin.white} priority={Priority.secondary} />
        <PButton skin={Skin.destructive} priority={Priority.secondary} />
        <PButton skin={Skin.premium} priority={Priority.secondary} />
      </div>

    </div>
  )
};
