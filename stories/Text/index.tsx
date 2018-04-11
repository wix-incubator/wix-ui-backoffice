import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch} from '../../src/components/ToggleSwitch';
import {Autocomplete} from '../../src/components/Autocomplete';
import {Heading} from '../../src/components/Heading';
import {Input} from '../../src/components/Input';
import {Text} from '../../src/components/Text';
import {SIZES, SKINS} from '../../src/components/Text/constants';
import styles from './Text.st.css';

const skinOptions = Object.keys(SKINS).map(value => Autocomplete.createOption({id: value, value}));
const sizeOptions = Object.keys(SIZES).map(value => Autocomplete.createOption({id: value, value}));

class ControlleTextExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      size: SIZES.medium,
      secondary: false,
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
            <Heading appearance="H2">size: </Heading> <Autocomplete options={sizeOptions} onSelect={({value}) => this.setState({size: value})} initialSelectedId={this.state.size}/><br/><br/>
            <Heading appearance="H2">secondary: </Heading> <ToggleSwitch checked={this.state.secondary} onChange={() => this.setState({secondary: !this.state.secondary})}/><br/><br/>
            <Heading appearance="H2">skin: </Heading> <Autocomplete options={skinOptions} onSelect={({value}) => this.setState({skin: value})} initialSelectedId={this.state.skin}/><br/><br/>
            <Heading appearance="H2">light: </Heading> <ToggleSwitch checked={this.state.light} onChange={() => this.setState({light: !this.state.light})}/><br/><br/>
            <Heading appearance="H2">bold: </Heading> <ToggleSwitch checked={this.state.bold} onChange={() => this.setState({bold: !this.state.bold})}/><br/><br/>
            <Heading appearance="H2">children: </Heading> <Input onChange={e => this.setState({children: e.target.value})} value={this.state.children}/><br/><br/>
            <Heading appearance="H2">ellipsis: </Heading> <ToggleSwitch checked={this.state.ellipsis} onChange={() => this.setState({ellipsis: !this.state.ellipsis})}/><br/><br/>
            <Heading appearance="H2">forceHideTitle: </Heading> <ToggleSwitch checked={this.state.forceHideTitle} onChange={() => this.setState({forceHideTitle: !this.state.forceHideTitle})}/><br/><br/>

          </div>
          <div>
            <Heading> Preview </Heading><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div style={this.state.ellipsis ? {width: '40px'} : {width: '300px'}}>
              <Text
                size={this.state.size}
                secondary={this.state.secondary}
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
        <br/><br/>

        <Heading>Typography Example: </Heading><br/>
        <div>
          <h3>Text</h3>
          <ul className={`ltr ${styles.root}`}>
            <li><Text>Helvetica_45 / 16px / 24px</Text></li>
            <li><Text secondary>secondary - Helvetica_45 / 16px / 24px</Text></li>
            <li className={styles.inverted}>
              <Text light>light - Helvetica_45 / 16px / 24px</Text>
            </li>
            <li><Text secondary light>secondary light - Helvetica_45 / 16px / 24px</Text></li>
          </ul>

          <h3>Bold Text</h3>
          <ul className={`ltr ${styles.root}`}>
            <li><Text bold>bold - Helvetica_55 / 16px / 24px</Text></li>
            <li><Text bold secondary>bold secondary - Helvetica_55 / 16px / 24px</Text></li>
            <li className={styles.inverted}>
              <Text bold light>bold light - Helvetica_55 / 16px / 24px</Text>
            </li>
            <li><Text bold secondary light>bold secondary light - Helvetica_55 / 16px / 24px</Text></li>
          </ul>

          <h3>Small Text</h3>
          <ul className={`ltr ${styles.root}`}>
            <li><Text size="small">small - Helvetica_45 / 14px / 18px</Text></li>
            <li><Text size="small" secondary>small secondary - Helvetica_45 / 14px / 18px</Text></li>
            <li className={styles.inverted}>
              <Text size="small" light>small light - Helvetica_45 / 14px / 18px</Text>
            </li>
            <li><Text size="small" secondary light>small secondary light - Helvetica_45 / 14px / 18px</Text></li>
          </ul>

          <h3>Small Bold Text</h3>
          <ul className={`ltr ${styles.root}`}>
            <li><Text size="small" bold>small bold - Helvetica_55 / 14px / 18px</Text></li>
            <li><Text size="small" secondary bold>small secondary bold - Helvetica_55 / 14px / 18px</Text></li>
            <li className={styles.inverted}>
              <Text size="small" bold light>small + bold + light - Helvetica_55 / 14px / 18px</Text>
            </li>
            <li><Text size="small" secondary bold light>small secondary bold light - Helvetica_55 / 14px / 18px</Text></li>
          </ul>
        </div>
      </div>
    );
  }
}

export const story = () => storiesOf('Components', module)
  .add('Text', () => (
    <ControlleTextExample/>
  ));
