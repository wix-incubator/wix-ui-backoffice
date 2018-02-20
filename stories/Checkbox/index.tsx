import {storiesOf} from '@storybook/react';
import {Checkbox} from '../../src/components/Checkbox';
import * as React from 'react';

class ControlledCheckbox extends React.Component<any, { checked: boolean }> {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }
  render() {
    return <Checkbox {...this.props} checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})} />;
  }
}

export const story = () => storiesOf('Components', module)
  .add('Checkbox', () => (
    <div style={{width: '50px'}}>
      <ControlledCheckbox data-hook="storybook-checkbox">
        Hello
      </ControlledCheckbox>
    </div>
  ));
