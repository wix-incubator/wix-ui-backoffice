import { DataHooks } from './DataHooks';
import { BaseDriver, DriverFactory } from 'wix-ui-test-utils/driver-factory';
import { Skin } from '../../Button/constants';

import style from './FloatingHelperContent.st.css';

export interface FloatingHelperContentDriver extends BaseDriver {
  /** checks if the element exists */
  exists(): boolean;

  /** checks if title exists */
  hasTitle(): boolean;

  /** checks if text content exists */
  hasBody(): boolean;

  /** checks if an image exists */
  hasImage(): boolean;

  /** checks if the action button exists */
  hasActionButton(): boolean;

  /** checks if the secondary action button exists */
  hasSecondaryActionButton(): boolean;

  /** Get the text content of the title */
  getTitleContent(): string;

  /** Get the text content of the helper's text */
  getBodyContent(): string;

  /** Get image HTML element*/
  getImage(): HTMLElement;

  /** Get text of action button */
  getActionButtonText(): string;

  /** Get text of secondary action button */
  getSecondaryActionButtonText(): string;

  /** naive way to check for stylable class */
  matchesActionButtonClassName(className: string): boolean;

  /** naive way to check for stylable class */
  matchesSecondaryActionButtonClassName(className: string): boolean;

  /** click on the action button */
  clickActionButton(): void;

  /** click on the secondary action button */
  clickSecondaryActionButton(): void;
}

export const floatingHelperContentDriverFactory: DriverFactory<
  FloatingHelperContentDriver
> = factoryParams => {
  const { element } = factoryParams;
  const title = () => element.querySelector(`[data-hook='${DataHooks.title}']`);
  const body = () => element.querySelector(`[data-hook='${DataHooks.body}']`);
  const image = () => element.querySelector(`[data-hook='${DataHooks.image}']`);
  const actionButton = () =>
    element.querySelector(`[data-hook='${DataHooks.actionButton}']`);
  const secondaryActionButton = () =>
    element.querySelector(`[data-hook='${DataHooks.secondaryActionButton}']`);

  return {
    exists: () => !!element,
    hasTitle: () => !!title(),
    hasBody: () => !!body(),
    hasActionButton: () => !!actionButton(),
    hasSecondaryActionButton: () => !!secondaryActionButton(),
    hasImage: () => !!image(),
    getImage: () => image() && (image().childNodes[0] as HTMLElement),
    getTitleContent: () => title().textContent,
    getBodyContent: () => body().textContent,
    getActionButtonText: () => actionButton().textContent,
    getSecondaryActionButtonText: () => secondaryActionButton().textContent,
    matchesActionButtonClassName: className =>
      !!Array.from(actionButton().classList).find(c => c.includes(className)),
    matchesSecondaryActionButtonClassName: className =>
      !!Array.from(secondaryActionButton().classList).find(c =>
        c.includes(className)
      ),
    clickActionButton: () => factoryParams.eventTrigger.click(actionButton()),
    clickSecondaryActionButton: () => factoryParams.eventTrigger.click(secondaryActionButton())
  };
};
