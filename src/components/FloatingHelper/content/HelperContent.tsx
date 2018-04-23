import * as React from 'react';
import style from './HelperContent.st.css';
import {Text} from '../../Text';
import {DataHooks} from './DataHooks';

export interface HelperContentProps {
  /** Adds text as the title */
  title?: string;
  text?: string;
}

export const HelperContent: React.SFC<HelperContentProps> = (props: HelperContentProps) => {
  return (
    <div {...style('root', {}, props)}>
      {props.title &&
        <div className={style.title}>
          <Text dataHook={DataHooks.title} bold light>
            {props.title}
          </Text>
        </div>
      }
      {props.text &&
        <div className={style.text}>
          <Text dataHook={DataHooks.text} light>
            {props.text}
          </Text>
        </div>
      }
    </div>
  );
};
