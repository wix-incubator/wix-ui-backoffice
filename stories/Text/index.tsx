import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {UIText} from '../../src/components/StylableUIText';
import {Input} from '../../src/components/Input';
import {Text} from '../../src/components/Text';
import {APPEARANCES, SKINS} from '../../src/components/Text/constants';

const skinOptions = Object.keys(SKINS).map(value => Autocomplete.createOption({id: value, value}));
const appearanceOptions = Object.keys(APPEARANCES).map(value => Autocomplete.createOption({id: value, value}));

class ControlleTextExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      appearance: 'T1',
      skin: 'standard',
      light: false,
      bold: false,
      children: 'Some text',
      ellipsis: false,
      forceHideTitle: false
    };
  }

  render() {
    return(
      <div>
        <div style={{background: 'azure', width: '310px', margin: '30px 20px'}}><Text>{`import {Text} from 'wix-ui-backoffice/Text';`}</Text></div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '120px'}}>
            <Heading> Props </Heading><br/><br/><br/>
            <Heading appearance="H3">appearance: </Heading> <Autocomplete options={appearanceOptions} onSelect={({value}) => this.setState({appearance: value})} initialSelectedId={this.state.appearance}/><br/><br/>
            <Heading appearance="H3">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
            <Heading appearance="H3">light: </Heading> <ToggleSwitch checked={this.state.light} onChange={() => this.setState({light: !this.state.light})}/><br/><br/>
            <Heading appearance="H3">bold: </Heading> <ToggleSwitch checked={this.state.bold} onChange={() => this.setState({bold: !this.state.bold})}/><br/><br/>
            <Heading appearance="H3">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>
            <Heading appearance="H3">ellipsis: </Heading> <ToggleSwitch checked={this.state.ellipsis} onChange={() => this.setState({ellipsis: !this.state.ellipsis})}/><br/><br/>
            <Heading appearance="H3">forceHideTitle: </Heading> <ToggleSwitch checked={this.state.forceHideTitle} onChange={() => this.setState({forceHideTitle: !this.state.forceHideTitle})}/><br/><br/>

          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={this.state.ellipsis ? {width: '40px'} : {width: '300px'}}>
              <Text
                appearance={this.state.appearance}
                skin={this.state.skin}
                light={this.state.light}
                bold={this.state.bold}
                ellipsis={this.state.ellipsis}
                forceHideTitle={this.state.forceHideTitle}
                dataHook="storybook-text"
                >
                {this.state.children}
              </Text>
            </div>
          </div>
        </div>
        <br/><br/><br/>

        <Heading>Multiline Example: </Heading><br/>
        <Text>{`First line\nSecond line`}</Text>
        <br/>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Text', () => (
    <ControlleTextExample/>
  ));
