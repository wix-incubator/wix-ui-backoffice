import * as React from 'react';

import Image from 'wix-ui-icons-common/Image';

import {Thumbnail} from '../src/components/Thumbnail';

const image = <Image width="240" height="180"/>;

export default {
  category: 'Components',
  storyName: 'Thumbnail',
  component: Thumbnail,
  componentPath: '../src/components/Thumbnail/Thumbnail.tsx',

  componentProps: {
    'data-hook': 'storybook-thumbnail',
    title: 'Thumnbail Title',
    description: 'Description about this thumbnail option goes here',
    image
  },

  exampleProps: {
    image: [
      { label: 'small image', value: <Image width="64" height="64"/> },
      { label: 'normal image', value: image },
      { label: 'big image', value: <Image width="400" height="400"/> }
    ]
  }
};
