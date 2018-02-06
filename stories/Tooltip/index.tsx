import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Tooltip} from '../../src/components/Tooltip';

function createTooltip(direction) {
  return (
    <Tooltip data-hook={`story-tooltip-${direction}`} placement={direction}
             minWidth={'100px'} textAlign={'center'} padding={'5px'}
             content={<p>This is my tooltip</p>} bounce={true}>
      <span>I need a tooltip</span>
    </Tooltip>
  );
}

class FullTooltip extends React.Component<{direction: string}> {
  render() {
    return <div style={{margin: '10em 15em'}}>{createTooltip(this.props.direction)}</div>;
  }
}

export const story = () => storiesOf('Components', module)
  .add('Tooltip', () => (
    <div>
      <FullTooltip direction="right"/>
      <FullTooltip direction="top"/>
      <FullTooltip direction="left"/>
      <FullTooltip direction="bottom"/>
    </div>
  ));
