import * as React from 'react';
import { string } from "prop-types";
import style from './HelperContent.st.css';
import {Text} from '../../../components/Text';
import {DataHooks} from './DataHooks';

export interface HelperContentProps {
  /** Adds text as the title */
  title?: string;
  /** Adds text as the body */
  body?: string;
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
      {props.body &&
        <div>
          <Text dataHook={DataHooks.body} light>
            {props.body}
          </Text>
        </div>
      }
    </div>
  );
};

HelperContent.propTypes = {
  title: string,
  body: string
}
