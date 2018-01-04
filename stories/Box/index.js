import React from 'react';
import createStory from '../create-story';

import Box from '../../src/components/Box';
import BoxSource from '!raw-loader!../../src/components/Box';

export const story = () => createStory({
  category: 'Components',
  name: 'Box',
  storyName: 'Box',
  component: Box,
  componentProps: () => ({
    crossAxisAlignment: 'start',
    spacing: '1%',
    lastItemTakesRemainingWidth: true,
    children: [' corrugated box ', ' folding carton ', ' rigid paperboard ', ' crate ', ' bulk box '].map(
      (boxName, index, boxArray) => {
        const last = index === boxArray.length - 1;
        let color = 'lightblue';
        if (last) {
          color = 'red';
          return (<input key={index} style={{display: 'block'}} defaultValue={boxName}/>);
        }
        return (<div key={index} style={{backgroundColor: color, display: 'block'}}>{boxName}</div>);
      }),
    dataHook: 'storybook-box'
  }),
  source: BoxSource
});
