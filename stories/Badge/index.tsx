import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Badge} from '../../src/components/Badge';
import {SKIN, TYPE} from '../../src/components/Badge/constants';
import {Email, Facebook} from 'wix-ui-icons-common';
import {Input} from '../../src/components/Input';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';

const skinOptions = Object.keys(SKIN).map(value => Autocomplete.createOption(value, false, true, value));
const typeOptions = Object.keys(TYPE).map(value => Autocomplete.createOption(value, false, true, value));

const iconsOptions = ['none', 'Email'].map(value => Autocomplete.createOption(value, false, true, value));


class ControlledBadgeExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      skin: SKIN.default,
      type: TYPE.solid,
      children: 'I\'M A BADGE!',
      prefixIcon: 'none',
      suffixIcon: 'none'
    };
  }

  render() {
    console.log(this.state.skin);
    return(
      <div style={{display: 'flex'}}>
        <div style={{marginRight: '120px'}}>
          <Heading> Props </Heading><br/><br/><br/>
          <Heading appearance="H3">children: </Heading> <Input value={this.state.children} onChange={e => this.setState({children: e.target.value})}/><br/><br/>
          <Heading appearance="H3">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedIds={[this.state.skin]}/><br/><br/>
          <Heading appearance="H3">type: </Heading> <Autocomplete options={typeOptions} onSelect={({value}) => this.setState({type: value})} initialSelectedIds={[this.state.type]}/><br/><br/>

          <Heading appearance="H3">prefixIcon: </Heading><Autocomplete options={iconsOptions} onSelect={({value}) => this.setState({prefixIcon: value})} initialSelectedIds={[this.state.prefixIcon]}/><br/><br/>
          <Heading appearance="H3">suffixIcon: </Heading><Autocomplete options={iconsOptions} onSelect={({value}) => this.setState({suffixIcon: value})} initialSelectedIds={[this.state.suffixIcon]}/><br/><br/>
        </div>
        <div>
          <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Badge
            skin={this.state.skin}
            type={this.state.type}
            prefixIcon={this.state.prefixIcon == 'Email' ? <Email/> : null}
            suffixIcon={this.state.suffixIcon == 'Email' ? <Email/> : null}
            data-hook="storybook-badge">
            I'M A BADGE!
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
