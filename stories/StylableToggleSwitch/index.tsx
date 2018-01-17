import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/StylableToggleSwitch';
import * as React from 'react';

class ControlledToggle extends React.Component<any, {checked: boolean}> {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }
  render() {
    return <ToggleSwitch {...this.props} checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})} />;
  }
}

export const story = () => storiesOf('Components', module)
  .add('StylableToggleSwitch', () => (
    <div style={{width: '50px'}}>
      <ControlledToggle dataHook="story-ToggleSwitch">
        Hello
      </ControlledToggle>
    </div>
  ));
