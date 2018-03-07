import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {CounterBadge} from '../../src/components/StylableCounterBadge';
import {SKIN} from '../../src/components/StylableCounterBadge/constants';
import {Facebook} from 'wix-ui-icons-common';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';

const skinOptions = Object.keys(SKIN).map(value => Autocomplete.createOption({id: value, value}));

const iconsOptions = ['1', '12', 'Facebook'].map(value => Autocomplete.createOption({id: value, value}));

class ControlleCounterdBadgeExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      skin: SKIN.general,
      children: '12'
    };
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H3">children: </Heading> <Autocomplete options={iconsOptions} onSelect={({value}) => this.setState({children: value})} initialSelectedId={this.state.children}/><br/><br/>
          <Heading appearance="H3">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <CounterBadge
            skin={this.state.skin}
            dataHook="storybook-counterBadge"
            >
            {this.state.children === 'Facebook' ? <Facebook/> : this.state.children}
          </CounterBadge>
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('StylableCounterBadge', () => (
    <ControlleCounterdBadgeExample/>
  ));
