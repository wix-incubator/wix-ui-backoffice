import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {Input} from '../../src/components/Input';
import {Text} from '../../src/components/Text';

const appearanceOptions = ['H1', 'H2', 'H3', 'H4', 'H5'].map(value => Autocomplete.createOption({id: value, value}));

class ControlleHeadingExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {...Heading.defaultProps, children: 'Some text'};
  }

  render() {
    return(
      <div>
        <div style={{background: 'azure', width: '355px', margin: '30px 20px'}}><Text>{`import {Heading} from 'wix-ui-backoffice/Heading';`}</Text></div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '120px'}}>
            <Heading> Props </Heading><br/><br/><br/>
            <Heading appearance="H3">appearance: </Heading> <Autocomplete options={appearanceOptions} onSelect={({value}) => this.setState({appearance: value})} initialSelectedId={this.state.appearance}/><br/><br/>
            <Heading appearance="H3">light: </Heading> <ToggleSwitch size="small" checked={this.state.light} onChange={() => this.setState({light: !this.state.light})}/><br/><br/>
            <Heading appearance="H3">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>
          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Heading
              appearance={this.state.appearance}
              light={this.state.light}
              dataHook="storybook-heading"
              >
              {this.state.children}
            </Heading>
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
