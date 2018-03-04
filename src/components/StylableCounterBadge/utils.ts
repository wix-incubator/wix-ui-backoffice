import * as React from 'react';
import {maxContentLength} from './constants';

export const getContent = children => React.Children.toArray(children)[0];

export const isIcon = children => {
  const content = getContent(children);
  return typeof children !== 'string' && typeof children !== 'number';
};

export const isWide = children => {
  const content = getContent(children);

  if (isIcon(children)) {
    return false;
  }

  const contentLength = content.toString().length;
  if (contentLength > maxContentLength) {
    throw new Error(`CounterBadge children max length can not be more than ${maxContentLength}`);
  }

  return contentLength === maxContentLength;
};
