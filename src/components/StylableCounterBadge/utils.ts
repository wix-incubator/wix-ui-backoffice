import * as React from 'react';
import {maxContentLength} from './constants';

export const getContent = children => React.Children.toArray(children)[0];

export const isIcon = children => typeof children !== 'string' && typeof children !== 'number';

export const isWide = children => {
  const content = getContent(children);

  if (isIcon(children)) {
    return false;
  }

  const contentLength = content.toString().length;

  return contentLength >= maxContentLength;
};
