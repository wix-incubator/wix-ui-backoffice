import * as React from 'react';
import Image from 'wix-ui-icons-common/Image';
import { linkTo } from '@storybook/addon-links';
import { Button } from '../../src/components/Button';
import { FloatingHelper, FloatingHelperProps } from '../../src/components/FloatingHelper';

import { storySettings } from './StorySettings';
import { storySettings as helperStorySettings } from '../FloatingHelperContent/StorySettings';

import CodeExample from 'wix-storybook-utils/CodeExample';

import {SimpleExample} from './SimpleExample';
import * as SimpleExampleRaw from '!raw-loader!./SimpleExample';

import {SimpleExampleLight} from './SimpleExampleLight';
import * as SimpleExampleLightRaw from '!raw-loader!./SimpleExampleLight';

import {FullExample} from './FullExample';
import * as FullExampleRaw from '!raw-loader!./FullExample';

import {ProgrammaticExample} from './ProgrammaticExample';
import * as ProgrammaticExampleRaw from '!raw-loader!./ProgrammaticExample';

import {ControlledExample} from './ControlledExample';
import * as ControlledExampleRaw from '!raw-loader!./ControlledExample';
import {enumValues} from '../../src/utils';
import {Appearance} from '../../src/components/FloatingHelper/constants';

const exampleWrapperStyle = {marginTop: 100, marginBottom: 100};

export default {
  category: storySettings.kind,
  storyName: storySettings.story,
  component: FloatingHelper,
  componentPath: '../../src/components/FloatingHelper/FloatingHelper.tsx',

  componentProps: {
    'data-hook': storySettings.dataHook,
    content: (
      <FloatingHelper.Content
        title="Don’t forget to setup payments"
        body="In order to sell your music you need to choose a payment method."
        actionText="Ok, Take Me There"
        onActionClick={() => null}
        image={<Image width="102" height="102" />}
      />),
    target: 'I am simple text target',
    placement: 'right'
  },

  exampleProps: {
    placement: ['right', 'bottom'],
    target: [
      {label: 'a string - example', value: 'I am simple text target'},
      {label: 'any node - example', value: <Button>I am a target</Button>},
    ],
    content: [
      {
        label: 'with title & body only',
        value: (
          <FloatingHelper.Content
            title="Don’t forget to setup payments"
            body="In order to sell your music you need to choose a payment method."
            actionText="Ok, Take Me There"
            onActionClick={() => null}
            image={<Image width="102" height="102" viewBox="4 4 18 18" />}
          />
        )
      },
      {
        label: 'with all items',
        value: (
          <FloatingHelper.Content
            title="Don’t forget to setup payments"
            body="In order to sell your music you need to choose a payment method."
          />
        )
      }
    ],
    appearance: enumValues(Appearance)
  },

  examples: (
    <div>
      <h1>Examples</h1>

      <p>
        The 'content' property should receive a {`<FloatingHelper.Content>`} element.
        <br/><br/>
        <Button onClick={linkTo(helperStorySettings.kind,helperStorySettings.story)}>Open FloatingHelper.Content story </Button>
      </p>

      <CodeExample title="Simple Example" code={SimpleExampleRaw}>
        <div style={exampleWrapperStyle}>
          <SimpleExample/>
        </div>
      </CodeExample >

      <CodeExample title="Full Example" code={FullExampleRaw}>
        <div style={exampleWrapperStyle}>
          <FullExample/>
        </div>
      </CodeExample >

      <CodeExample title="Programmatic Open Example" code={ProgrammaticExampleRaw}>
        <div style={exampleWrapperStyle}>
          <ProgrammaticExample/>
        </div>
      </CodeExample >

      <CodeExample title="Controlled Example" code={ControlledExampleRaw}>
        <div style={exampleWrapperStyle}>
          <ControlledExample/>
        </div>
      </CodeExample >

      <CodeExample title="Simple Example Appearance=Light" code={SimpleExampleLightRaw}>
        <div style={exampleWrapperStyle}>
          <SimpleExampleLight/>
        </div>
      </CodeExample >
    </div>
  )
};
