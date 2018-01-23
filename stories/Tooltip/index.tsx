import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Tooltip} from '../../src/components/Tooltip';

function createTooltip(direction) {
  return (
    <Tooltip data-hook={`story-tooltip-${direction}`} placement={direction}
             content="This is my tooltip">
      <span>I need a tooltip</span>
    </Tooltip>
  );
}

class FullTooltip extends React.Component<any, {shown: boolean}> {
  constructor(props) {
    super(props);
    this.state = {shown: false};
  }
  render() {
    return <div>{createTooltip('right')}</div>;
  }
}

export const story = () => storiesOf('Components', module)
  .add('Tooltip', () => (
    <FullTooltip />
  ));
