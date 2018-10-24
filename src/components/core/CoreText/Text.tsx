import * as React from 'react';
import style from './Text.st.css';

export interface TextProps {
  children?: React.ReactNode;
  ellipsis?: boolean;
  forceHideTitle?: boolean;
  tagName?: string;
  className?: string;
}
/**
 * Text
 */
export const Text: React.SFC<TextProps> = props => {
  const {children, ellipsis, tagName, forceHideTitle} = props;
  return React.createElement(
    tagName,
    {
      title: typeof children === 'string' && ellipsis && !forceHideTitle ? children : null,
      ...style('root', {ellipsis}, props)
    },
    children
  );
};

Text.displayName = 'Text';
Text.defaultProps = {
  tagName: 'span'
};
