import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {PopoverHelper} from '../../src/components/PopoverHelper';

function createPopoverHelper(direction, bounce) {
  return (
    <PopoverHelper
      data-hook={`story-tooltip-${direction}`}
      placement={direction}
      minWidth={'100px'}
      textAlign={'center'}
      padding={'5px'}
      content={'I am a message'}
      bounce={bounce}>
      <span>I need a tooltip</span>
    </PopoverHelper>
  );
}

class FullTooltip extends React.Component<{ direction: string, bounce?: boolean }> {
  render() {
    const {direction, bounce} = this.props;
    return <div style={{margin: '10em 15em'}}>{createPopoverHelper(direction, bounce)}</div>;
  }
}

export const story = () => storiesOf('Components', module)
  .add('PopoverHelper', () => (
    <div>
      <FullTooltip direction="right" />
    </div>
  ));
