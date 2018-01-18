import {storiesOf} from '@storybook/react';
import {InputWithOptions} from '../../src/components/InputWithOptions';
import * as React from 'react';

class ControlledToggle extends React.Component<any, {checked: boolean}> {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }
  render() {
    return <InputWithOptions  />;
  }
}

export const story = () => storiesOf('Components', module)
  .add('StylableInputWithOptions', () => (
    <div style={{width: '50px'}}>
      <ControlledToggle dataHook="story-InputWithOptions">
        Hello
      </ControlledToggle>
    </div>
  ));
