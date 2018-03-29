import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {UIText} from '../../src/components/StylableUIText';
import {Input} from '../../src/components/Input';
import {Text} from '../../src/components/Text';

const skinOptions = ['dark', 'light'].map(value => Autocomplete.createOption({id: value, value}));
const appearanceOptions = ['T1', 'T1.1', 'T3', 'T3.1'].map(value => Autocomplete.createOption({id: value, value}));

class ControlleTextExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      skin: 'dark',
      appearance: 'T1',
      children: 'Some text'
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
            <Heading appearance="H3">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>
          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Text
              appearance={this.state.appearance}
              skin={this.state.skin}
              dataHook="storybook-text"
              >
              {this.state.children}
            </Text>
          </div>
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Text', () => (
    <ControlleTextExample/>
  ));
