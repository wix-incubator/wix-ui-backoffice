import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/StylableToggleSwitch';
import {SKIN} from '../../src/components/StylableCounterBadge/constants';
import {Facebook} from 'wix-ui-icons-common';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';

const skinOptions = ['standard', 'error', 'success'].map(value => Autocomplete.createOption({id: value, value}));
const sizeOptions = ['small', 'medium', 'large'].map(value => Autocomplete.createOption({id: value, value}));

class ControlleToggleSwitchExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      skin: 'standard',
      size: 'medium',
      checked: false
    };
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H3">size: </Heading> <Autocomplete options={sizeOptions} onSelect={({value}) => this.setState({size: value})} initialSelectedId={this.state.size}/><br/><br/>
          <Heading appearance="H3">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <ToggleSwitch
            size={this.state.size}
            skin={this.state.skin}
            checked={this.state.checked}
            onChange={() => this.setState({checked: !this.state.checked})}
            data-hook="storybook-ToggleSwitch"
            />
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('StylableToggleSwitch', () => (
    <ControlleToggleSwitchExample/>
  ));
