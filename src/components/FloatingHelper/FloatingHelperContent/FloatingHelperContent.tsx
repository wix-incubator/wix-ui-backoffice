import * as React from 'react';
import { string, func, node } from 'prop-types';
import style from './FloatingHelperContent.st.css';
import { Text } from '../../../components/Text';
import { DataHooks } from './DataHooks';
import { Button, ButtonProps, ButtonSkin, ButtonPriority, ButtonSize } from '../../Button';
import { ActionButtonTheme } from './constants';

export interface FloatingHelperContentProps {
  /** Adds text as the title */
  title?: string;
  /** Adds text as the body */
  body: string;
  /** Sets the text of the action button. Needs to be a non-empty string (and onActionClick prop has to be passed) in order for the action button to appear */
  actionText?: string;
  /** Sets the theme of the action button */
  actionTheme?: ActionButtonTheme;
  /** When both onActionClick & actionText are provided, will make an action button appear and invoke onActionClick() upon click */
  onActionClick?:() => void,
  /** Adds an image */
  image?: React.ReactNode;
}

const themeToButtonProps: { [key in ActionButtonTheme]: Pick<ButtonProps, 'skin' | 'priority'> } = {
  [ActionButtonTheme.white]: { skin: ButtonSkin.white, priority: ButtonPriority.secondary },
  [ActionButtonTheme.premium]: { skin: ButtonSkin.premium, priority: ButtonPriority.primary }
}

export const FloatingHelperContent: React.SFC<FloatingHelperContentProps> = (
  props: FloatingHelperContentProps
) => {
  const { title, body, actionText, onActionClick, actionTheme, image } = props;

  return (
    <div {...style('root', { hasBody: !!props.body }, props)}>
      <div>
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
        {actionText && onActionClick &&
          actionText.length > 0 && (
            <Button
              className={style.action}
              data-hook={DataHooks.actionButton}
              skin={themeToButtonProps[actionTheme].skin}
              priority={themeToButtonProps[actionTheme].priority}
              size={ButtonSize.small}
              onClick={onActionClick}
            >
              {actionText}
            </Button>
          )}
      </div>
      {image && <div data-hook={DataHooks.image} className={style.image}>{image}</div>}
    </div>
  );
};

FloatingHelperContent.propTypes = {
  title: string,
  body: string.isRequired,
  actionText: string,
  onActionClick: func,
  image: node
};

FloatingHelperContent.defaultProps = {
  actionTheme: ActionButtonTheme.white
};
