import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {Input} from '../../src/components/Input';
import {Label} from '../../src/components/Label';
import {SIZES} from '../../src/components/Label/constants';

const sizeOptions = Object.keys(SIZES).map(value => Autocomplete.createOption({id: value, value}));

class ControlledLabelExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      size: SIZES.medium,
      children: 'Some label'
    };
  }

  render() {
    return(
      <div>
        <div style={{background: 'azure', width: '310px', margin: '30px 20px'}}><Label>{`import {Label} from 'wix-ui-backoffice/Label';`}</Label></div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '120px'}}>
            <Heading> Props </Heading><br/><br/><br/>
            <Heading appearance="H2">size: </Heading> <Autocomplete options={sizeOptions} onSelect={({value}) => this.setState({size: value})} initialSelectedId={this.state.size}/><br/><br/>
            <Heading appearance="H2">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>

          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={this.state.ellipsis ? {width: '40px'} : {width: '300px'}}>
              <Label
                size={this.state.size}
                dataHook="storybook-label"
              >
                {this.state.children}
              </Label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

storiesOf('Components', module)
  .add('Label', () => <ControlledLabelExample/>);
