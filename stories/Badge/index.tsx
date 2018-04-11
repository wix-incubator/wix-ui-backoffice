import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Badge} from '../../src/components/Badge';
import {SKIN, TYPE} from '../../src/components/Badge/constants';
import Facebook from 'wix-ui-icons-common/Facebook';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import {Input} from '../../src/components/Input';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';

const skinOptions = Object.keys(SKIN).map(value => Autocomplete.createOption({id: value, value}));
const typeOptions = Object.keys(TYPE).map(value => Autocomplete.createOption({id: value, value}));

const iconsOptions = ['none', 'ArrowDown'].map(value => Autocomplete.createOption({id: value, value}));

class ControlledBadgeExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      skin: SKIN.general,
      type: TYPE.solid,
      children: 'I\'M A BADGE!',
      prefixIcon: 'none',
      suffixIcon: 'none'
    };
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H2">children: </Heading> <Input value={this.state.children} onChange={e => this.setState({children: e.target.value})}/><br/><br/>
          <Heading appearance="H2">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
          <Heading appearance="H2">type: </Heading> <Autocomplete options={typeOptions} onSelect={({value}) => this.setState({type: value})} initialSelectedId={this.state.type}/><br/><br/>

          <Heading appearance="H2">prefixIcon: </Heading><Autocomplete options={iconsOptions} onSelect={({value}) => this.setState({prefixIcon: value})} initialSelectedId={this.state.prefixIcon}/><br/><br/>
          <Heading appearance="H2">suffixIcon: </Heading><Autocomplete options={iconsOptions} onSelect={({value}) => this.setState({suffixIcon: value})} initialSelectedId={this.state.suffixIcon}/><br/><br/>
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Badge
            skin={this.state.skin}
            type={this.state.type}
            prefixIcon={this.state.prefixIcon === 'ArrowDown' ? <ChevronDown/> : null}
            suffixIcon={this.state.suffixIcon === 'ArrowDown' ? <ChevronDown/> : null}
            dataHook="storybook-badge"
            >
            {this.state.children}
          </Badge>
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Badge', () => (
    <ControlledBadgeExample/>
  ));
