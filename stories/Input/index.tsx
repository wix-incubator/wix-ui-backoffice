import createStory from '../create-story';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Input} from '../../src/components/Input';
import * as InputSource from '!raw-loader!../../src/components/Input/index.tsx';

// class ControlledToggle extends React.Component<any, any> {
//   render() {
//     return <Input {...this.props} />;
//   }
// }

export const story = () => storiesOf('Components', module)
  .add('Input', () => (
      <Input data-hook="storybook-input"/>
  ));

// export const story = () => createStory({
//   category: 'Components',
//   name: 'Input',
//   storyName: 'Input',
//   component: Input,
//   componentProps: () => ({
//     'data-hook': 'storybook-input'
//   }),
//   source: InputSource
// });
