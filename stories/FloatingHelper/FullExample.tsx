import * as React from 'react';
import { FloatingHelper } from '../../src/components/FloatingHelper';
import Image from 'wix-ui-icons-common/Image';

export class FullExample extends React.Component {
  render() {
    return (
      <FloatingHelper
        target={<span>I am a FloatingHelper target</span>}
        content={
          <FloatingHelper.Content
            title="Don’t forget to setup payments"
            body="In order to sell your music you need to choose a payment method."
            actionText="Ok, Take Me There"
            onActionClick={() => null}
            image={<Image width="102" height="102" viewBox="4 4 18 18" />}
          />
        }
        placement="right"
      />
    );
  }
}
