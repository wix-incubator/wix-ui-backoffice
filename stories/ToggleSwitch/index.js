import React from 'react';
import ToggleSwitch from '../../src/components/ToggleSwitch';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: true};
  }

  render() {
    return (
      <div style={{width: '500px', marginLeft: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <h1>ToggleSwitch</h1>
        <h3>standard</h3><ToggleSwitch skin={this.state.x} checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
        <h3>error</h3><ToggleSwitch skin="error" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
        <h3>success</h3><ToggleSwitch skin="success" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
        <h3>disabled</h3><ToggleSwitch disabled checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
      </div>
    );
  }
}
