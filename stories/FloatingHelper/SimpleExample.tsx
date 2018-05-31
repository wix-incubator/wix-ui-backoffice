import * as React from 'react';
import { FloatingHelper } from '../../src/components/FloatingHelper';

export class SimpleExample extends React.Component {
  render() {
    return (
      <FloatingHelper
        target={<span>I am a FloatingHelper target</span>}
        content={
          <FloatingHelper.Content
            title="Don’t forget to setup payments"
            body="In order to sell your music you need to choose a payment method."
          />
        }
        placement="right"
      />
    );
  }
}
