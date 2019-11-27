import * as React from 'react';
import * as classnames from 'classnames';

import style from './FloatingHelperContent.st.css';
import { Text } from '../../../components/Text';
import { DataHooks } from './DataHooks';
import {
  Button,
  ButtonProps,
  ButtonSkin,
  ButtonPriority,
  ButtonSize
} from '../../Button';

import { ButtonNext } from 'wix-ui-core/button-next';
import { button } from 'wix-ui-core/themes/backoffice';

import { ActionButtonTheme } from './constants';
import { Appearance } from '../constants';
import { enumValues } from '../../../utils';

export interface FloatingHelperContentProps {
  /** Adds text as the title */
  title?: string;
  /** Adds text as the body */
  body: string;
  /** Sets the text of the action button. Needs to be a non-empty string (and onActionClick prop has to be passed) in order for the action button to appear */
  actionText?: string;
  /** Sets the text of the secondary action button. Needs to be a non-empty string (and onSecondaryActionClick prop has to be passed) in order for the secondary action button to appear */
  secondaryActionText?: string;
  /** Sets the theme of the action button */
  actionTheme?: ActionButtonTheme;
  /** Sets the theme of the secondary action button */
  secondaryActionTheme?: ActionButtonTheme;
  /** When both onActionClick & actionText are provided, will make an action button appear and invoke onActionClick() upon click */
  onActionClick?: () => void;
  /** When both onSecondaryActionClick & secondaryActionText are provided, will make a secondary action button appear and invoke onSecondaryActionClick() upon click */
  onSecondaryActionClick?: () => void;
  /** Adds an image */
  image?: React.ReactNode;
  /* Appearance : `dark` or `light`. */
  appearance?: Appearance;
}

const themeToButtonProps: {
  [key in ActionButtonTheme]: Pick<ButtonProps, 'skin' | 'priority'>
} = {
  [ActionButtonTheme.white]: {
    skin: ButtonSkin.white,
    priority: ButtonPriority.secondary
  },
  [ActionButtonTheme.standard]: {
    skin: ButtonSkin.standard,
    priority: ButtonPriority.secondary
  },
  [ActionButtonTheme.premium]: {
    skin: ButtonSkin.premium,
    priority: ButtonPriority.primary
  },
  [ActionButtonTheme.premiumSecondary]: {
    skin: ButtonSkin.premium,
    priority: ButtonPriority.secondary
  },
  [ActionButtonTheme.lightPrimary]: {
    skin: ButtonSkin.white,
    priority: ButtonPriority.primary
  }
};

export const FloatingHelperContent: React.SFC<FloatingHelperContentProps> = (
  props: FloatingHelperContentProps
) => {
  const {
    title,
    body,
    actionText,
    onActionClick,
    secondaryActionText,
    onSecondaryActionClick,
    actionTheme,
    secondaryActionTheme,
    image,
    appearance
  } = props;

  return (
    <div {...style('root', { hasBody: !!props.body }, props)}>
      <div>
        {title && (
          <div className={style.title}>
            <Text
              data-hook={DataHooks.title}
              bold
              light={appearance === Appearance.dark}
            >
              {title}
            </Text>
          </div>
        )}
        {body && (
          <div className={style.body}>
            <Text
              data-hook={DataHooks.body}
              light={appearance === Appearance.dark}
            >
              {body}
            </Text>
          </div>
        )}

        {secondaryActionText &&
          onSecondaryActionClick &&
          secondaryActionText.length > 0 && (
            <ButtonNext
              className={classnames(
                style.action,
                style.secondaryAction,
                button(
                  themeToButtonProps[secondaryActionTheme].skin,
                  themeToButtonProps[secondaryActionTheme].priority,
                  ButtonSize.small
                )
              )}
              data-hook={DataHooks.secondaryActionButton}
              onClick={onSecondaryActionClick}
            >
              {secondaryActionText}
            </ButtonNext>
          )}

        {actionText && onActionClick && actionText.length > 0 && (
          <ButtonNext
            className={classnames(
              style.action,
              button(
                themeToButtonProps[actionTheme].skin,
                themeToButtonProps[actionTheme].priority,
                ButtonSize.small
              )
            )}
            data-hook={DataHooks.actionButton}
            onClick={onActionClick}
          >
            {actionText}
          </ButtonNext>
        )}
      </div>
      {image && (
        <div data-hook={DataHooks.image} className={style.image}>
          {image}
        </div>
      )}
    </div>
  );
};

FloatingHelperContent.defaultProps = {
  actionTheme: ActionButtonTheme.white,
  secondaryActionTheme: ActionButtonTheme.premiumSecondary,
  appearance: Appearance.dark
};
