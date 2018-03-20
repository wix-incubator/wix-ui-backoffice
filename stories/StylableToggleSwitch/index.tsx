import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/StylableToggleSwitch';
import {SKIN} from '../../src/components/StylableCounterBadge/constants';
import Music from 'wix-ui-icons-common/Music';
import VideoCamera from 'wix-ui-icons-common/VideoCamera';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {UIText} from '../../src/components/StylableUIText';

const skinOptions = ['standard', 'error', 'success'].map(value => Autocomplete.createOption({id: value, value}));
const sizeOptions = ['small', 'medium', 'large'].map(value => Autocomplete.createOption({id: value, value}));
const checkedIconOptions = ['v', 'VideoCamera'].map(value => Autocomplete.createOption({id: value, value}));
const uncheckedIconOptions = ['Minus', 'Music'].map(value => Autocomplete.createOption({id: value, value}));

class ControlleToggleSwitchExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      skin: 'standard',
      size: 'medium',
      checked: false,
      disabled: false,
      checkedIcon: 'v',
      uncheckedIcon: 'Minus'
    };
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H3">size: </Heading> <Autocomplete options={sizeOptions} onSelect={({value}) => this.setState({size: value})} initialSelectedId={this.state.size}/><br/><br/>
          <Heading appearance="H3">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
          <Heading appearance="H3">checked: </Heading> <ToggleSwitch size="small" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/><br/><br/>
          <Heading appearance="H3">disabled: </Heading> <ToggleSwitch size="small" checked={this.state.disabled} onChange={() => this.setState({disabled: !this.state.disabled})}/><br/><br/>
          <Heading appearance="H3">tabIndex: </Heading> <UIText appearance="T2.4">Tab Index</UIText><br/><br/>
          <Heading appearance="H3">onChange: </Heading> <UIText appearance="T2.4">Callback function when VideoCamera changes the value of the component</UIText><br/><br/>
          <Heading appearance="H3">styles: </Heading> <UIText appearance="T2.4">Inline styles for various parts of the switch</UIText><br/><br/>
          <Heading appearance="H3">id: </Heading> <UIText appearance="T2.4">The ID attribute to put on the toggle</UIText><br/><br/>
          <Heading appearance="H3">checkedIcon: </Heading> <Autocomplete options={checkedIconOptions} onSelect={({value}) => this.setState({checkedIcon: value})} initialSelectedId={this.state.checkedIcon}/><br/><br/>
          <Heading appearance="H3">uncheckedIcon: </Heading> <Autocomplete options={uncheckedIconOptions} onSelect={({value}) => this.setState({uncheckedIcon: value})} initialSelectedId={this.state.uncheckedIcon}/><br/><br/>
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <ToggleSwitch
            size={this.state.size}
            skin={this.state.skin}
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={() => this.setState({checked: !this.state.checked})}
            checkedIcon={this.state.checkedIcon === 'v' ? undefined : <VideoCamera/>}
            uncheckedIcon={this.state.uncheckedIcon === 'Minus' ? undefined : <Music/>}
            dataHook="storybook-ToggleSwitch"
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
