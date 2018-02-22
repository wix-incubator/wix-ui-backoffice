import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Badge} from '../../src/components/Badge';

class ControlledBadgeExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {skin: 'default', type: 'solid'};
  }
  render() {
    return(
      <div>
        skin: <input value={this.state.skin} onChange={e => this.setState({skin: e.target.value})}/><br/><br/>
        type: <input value={this.state.type} onChange={e => this.setState({type: e.target.value})}/><br/><br/>
        <Badge skin={this.state.skin} type={this.state.type} data-hook="storybook-badge">
          I'M A BADGE!
        </Badge>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Badge', () => (
    <ControlledBadgeExample/>
  ));
