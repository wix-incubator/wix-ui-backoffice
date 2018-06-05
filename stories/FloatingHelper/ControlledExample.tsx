import * as React from 'react';
// import { FloatingHelper } from 'wix-ui-backoffice/FloatingHelper';
import { FloatingHelper } from '../../src/components/FloatingHelper';

export class ControlledExample extends React.Component {
  state= {open: true};

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({open: true})}>Click to open</button>
          <button onClick={() => this.setState({open: false})}>Click to close</button>
        </div>
        <FloatingHelper
          opened={this.state.open}
          target={<span>I am a FloatingHelper target</span>}
          content={
            <FloatingHelper.Content
              title="Don’t forget to setup payments"
              body="In order to sell your music you need to choose a payment method."
            />
          }
          placement="right"
        />
      </div>
    );
  }
}
