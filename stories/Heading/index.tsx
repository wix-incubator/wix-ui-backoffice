import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {Input} from '../../src/components/Input';
import {Text} from '../../src/components/Text';

const appearanceOptions = ['H1', 'H2', 'H3', 'H4'].map(value => Autocomplete.createOption({id: value, value}));

class ControlleHeadingExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      appearance: 'H1',
      light: false,
      children: 'Some text',
      ellipsis: false,
      forceHideTitle: false
    };
  }

  render() {
    return(
      <div>
        <div style={{background: 'azure', width: '355px', margin: '30px 20px'}}><Text>{`import {Heading} from 'wix-ui-backoffice/Heading';`}</Text></div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '120px'}}>
            <Heading> Props </Heading><br/><br/><br/>
            <Heading appearance="H2">appearance: </Heading> <Autocomplete options={appearanceOptions} onSelect={({value}) => this.setState({appearance: value})} initialSelectedId={this.state.appearance}/><br/><br/>
            <Heading appearance="H2">light: </Heading> <ToggleSwitch checked={this.state.light} onChange={() => this.setState({light: !this.state.light})}/><br/><br/>
            <Heading appearance="H2">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>
            <Heading appearance="H2">ellipsis: </Heading> <ToggleSwitch checked={this.state.ellipsis} onChange={() => this.setState({ellipsis: !this.state.ellipsis})}/><br/><br/>
            <Heading appearance="H2">forceHideTitle: </Heading> <ToggleSwitch checked={this.state.forceHideTitle} onChange={() => this.setState({forceHideTitle: !this.state.forceHideTitle})}/><br/><br/>
          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={this.state.ellipsis ? {width: '150px'} : {width: '300px'}}>
              <Heading
                appearance={this.state.appearance}
                light={this.state.light}
                dataHook="storybook-heading"
                ellipsis={this.state.ellipsis}
                forceHideTitle={this.state.forceHideTitle}
              >
                {this.state.children}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Heading', () => (
    <ControlleHeadingExample/>
  ));
