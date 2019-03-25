import * as React from 'react';
import {
  FloatingHelper,
  Appearance
} from '../../src/components/FloatingHelper';
import Image from 'wix-ui-icons-common/Image';
import { ActionButtonTheme } from '../../src/components/FloatingHelper/FloatingHelperContent';

export class SimpleExampleLight extends React.Component {
  render() {
    return (
      <FloatingHelper
        data-hook="story-floating-helper-light"
        target={<span>I am a FloatingHelper target</span>}
        content={
          <FloatingHelper.Content
            title="Don’t forget to setup payments"
            body="In order to sell your music you need to choose a payment method."
            actionText="Ok, Take Me There"
            actionTheme="standard"
            onActionClick={() => null}
            image={
              <Image
                style={{ color: '#555555' }}
                width="102"
                height="102"
                viewBox="4 4 18 18"
              />
            }
          />
        }
        placement="right"
        appearance={Appearance.light}
      />
    );
  }
}
