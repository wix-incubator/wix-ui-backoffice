import * as React from 'react';
import {Thumbnail} from '../src/components/Thumbnail';
import * as ThumbnailSource from '!raw-loader!../src/components/Thumbnail/Thumbnail.tsx';
import Image from 'wix-ui-icons-common/Image';

export default {
  category: 'Components',
  storyName: 'Thumbnail',
  component: Thumbnail,
  source: ThumbnailSource,
  componentPath: '../src/components/Thumbnail/Thumbnail.tsx',
  componentProps: {
    'data-hook': 'storybook-thumbnail',
    title: 'Thumnbail Title',
    description: 'Description about this thumbnail option goes here',
    image: <Image width="240" height="180"/>
  }
};
