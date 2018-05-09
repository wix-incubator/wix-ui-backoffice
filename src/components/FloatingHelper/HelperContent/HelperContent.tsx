import * as React from 'react';
import { string } from 'prop-types';
import style from './HelperContent.st.css';
import { Text } from '../../../components/Text';
import { DataHooks } from './DataHooks';
import { Button, ButtonProps, ButtonSkin, ButtonPriority, ButtonSize } from '../../Button';
import { ActionButtonTheme } from './constants';

export interface HelperContentProps {
  /** Adds text as the title */
  title?: string;
  /** Adds text as the body */
  body?: string;
  /** Sets the text of the action button. Needs to be a non-empty string in order for the action button to appear */
  actionText?: string;
  /** Sets the theme of the action button */
  actionTheme?: ActionButtonTheme;
}

const themeToButtonProps : {[key in ActionButtonTheme]: Pick<ButtonProps, 'skin' | 'priority'>} = {
  [ActionButtonTheme.white]: {skin: ButtonSkin.white, priority: ButtonPriority.secondary},
  [ActionButtonTheme.premium]: {skin: ButtonSkin.premium, priority: ButtonPriority.primary}
}

export const HelperContent: React.SFC<HelperContentProps> = (
  props: HelperContentProps
) => {
  const {title, body, actionText, actionTheme} = props;
  return (
    <div {...style('root', { hasBody: !!props.body }, props)}>
      {title && (
        <div className={style.title}>
          <Text data-hook={DataHooks.title} bold light>
            {title}
          </Text>
        </div>
      )}
      {body && (
        <div className={style.body}>
          <Text data-hook={DataHooks.body} light>
            {body}
          </Text>
        </div>
      )}
      {actionText &&
        actionText.length > 0 && (
          <Button
            className={style.action}
            data-hook={DataHooks.actionButton}
            skin={themeToButtonProps[actionTheme].skin}
            priority={themeToButtonProps[actionTheme].priority}
            size={ButtonSize.small}
          >
            {actionText}
          </Button>
        )}
    </div>
  );
};

HelperContent.propTypes = {
  title: string,
  body: string,
  actionText: string
};

HelperContent.defaultProps = {
  actionTheme: ActionButtonTheme.white
};
