import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {UIText} from '../../src/components/StylableUIText';
import {SIZES, SKINS} from '../../src/components/ToggleSwitch/constants';

const skinOptions = Object.keys(SKINS).map(value => Autocomplete.createOption({id: value, value}));
const sizeOptions = Object.keys(SIZES).map(value => Autocomplete.createOption({id: value, value}));

class ControlleToggleSwitchExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      skin: SKINS.standard,
      size: SIZES.large,
      checked: false,
      disabled: false
    };
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H2">size: </Heading> <Autocomplete options={sizeOptions} onSelect={({value}) => this.setState({size: value})} initialSelectedId={this.state.size}/><br/><br/>
          <Heading appearance="H2">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
          <Heading appearance="H2">checked: </Heading> <ToggleSwitch size="small" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/><br/><br/>
          <Heading appearance="H2">disabled: </Heading> <ToggleSwitch size="small" checked={this.state.disabled} onChange={() => this.setState({disabled: !this.state.disabled})}/><br/><br/>
          <Heading appearance="H2">tabIndex: </Heading> <UIText appearance="T2.4">Tab Index</UIText><br/><br/>
          <Heading appearance="H2">onChange: </Heading> <UIText appearance="T2.4">Callback function when User changes the value of the component</UIText><br/><br/>
          <Heading appearance="H2">id: </Heading> <UIText appearance="T2.4">The ID attribute to put on the toggle</UIText><br/><br/>
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <ToggleSwitch
            size={this.state.size}
            skin={this.state.skin}
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={() => this.setState({checked: !this.state.checked})}
            dataHook="storybook-toggleSwitch"
          />
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('ToggleSwitch', () => (
    <ControlleToggleSwitchExample/>
  ));
