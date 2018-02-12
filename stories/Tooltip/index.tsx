import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Tooltip} from '../../src/components/Tooltip';

function createTooltip(direction, bounce) {
  return (
    <Tooltip data-hook={`story-tooltip-${direction}`} placement={direction}
             minWidth={'100px'} textAlign={'center'} padding={'5px'}
             content={<p>This is my tooltip</p>} bounce={bounce}>
      <span>I need a tooltip</span>
    </Tooltip>
  );
}

class FullTooltip extends React.Component<{direction: string, bounce?: boolean}> {
  render() {
    const {direction, bounce} = this.props;
    return <div style={{margin: '10em 15em'}}>{createTooltip(direction, bounce)}</div>;
  }
}

export const story = () => storiesOf('Components', module)
  .add('Tooltip', () => (
    <div>
      <FullTooltip direction="right"/>
      <FullTooltip direction="top"/>
      <FullTooltip direction="left"/>
      <FullTooltip direction="bottom"/>
      <FullTooltip direction="right" bounce/>
    </div>
  ));
