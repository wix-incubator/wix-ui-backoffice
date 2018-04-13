import * as React from 'react';
import style from './HelperContent.st.css';
import {Text} from '../../Text';
import {DataHooks} from './DataHooks';

export interface HelperContentProps {
  /** Adds text as the title */
  title: string;
}

export const HelperContent = (props: HelperContentProps) => {
  return (
    <div {...style('root', {}, props)}>
      {props.title &&
        <div className={style.title}>
          <Text dataHook={DataHooks.title} appearance="T2.2" light>
            {props.title}
          </Text>
        </div>
      }
    </div>
  );

};
