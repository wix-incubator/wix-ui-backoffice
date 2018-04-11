import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {GlobalHelper} from '../../src/components/GlobalHelper';

function createGlobalHelper(direction, bounce) {
  return (
    <GlobalHelper
      data-hook={`story-global-helper-${direction}`}
      placement={direction}
      shown={true}

      content={<div>I am the content</div>}
      >
      <span>I am a GlobalHelper target</span>
    </GlobalHelper>
  );
}

class FullTooltip extends React.Component<{ direction: string, bounce?: boolean }> {
  render() {
    const {direction, bounce} = this.props;
    return <div style={{margin: '10em 15em'}}>{createGlobalHelper(direction, bounce)}</div>;
  }
}

export const story = () => storiesOf('Components', module)
  .add('GlobalHelper', () => (
    <div>
      <FullTooltip direction="right" />
    </div>
  ));
