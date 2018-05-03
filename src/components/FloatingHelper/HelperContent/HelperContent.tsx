import * as React from 'react';
import { string } from 'prop-types';
import style from './HelperContent.st.css';
import {Text} from '../../../components/Text';
import {DataHooks} from './DataHooks';
import { Button } from '../../Button';
export interface HelperContentProps {
  /** Adds text as the title */
  title?: string;
  /** Adds text as the body */
  body?: string;
  /** Sets the text of the action button. Needs to be a non-empty string in order for the action button to appear */
  actionText?: string
}

export const HelperContent: React.SFC<HelperContentProps> = (props: HelperContentProps) => {
  return (
    <div {...style('root', {}, props)}>
      {props.title &&
        <div className={style.title}>
          <Text data-hook={DataHooks.title} bold light>
            {props.title}
          </Text>
        </div>
      }
      {props.body &&
        <div>
          <Text data-hook={DataHooks.body} light>
            {props.body}
          </Text>
        </div>
      }
      {props.actionText && props.actionText.length > 0 &&
        <Button data-hook={DataHooks.actionButton}>
          {props.actionText}
        </Button>
      }
    </div>
  );
};

HelperContent.propTypes = {
  title: string,
  body: string,
  actionText: string
}
