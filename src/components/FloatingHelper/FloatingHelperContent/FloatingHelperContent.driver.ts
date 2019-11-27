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

  /** checks if the footer exists */
  hasFooter(): boolean;

  /** Get the text content of the title */
  getTitleContent(): string;

  /** Get the text content of the helper's text */
  getBodyContent(): string;

  /** Get image HTML element*/
  getImage(): HTMLElement;

  /** Get footer HTML element*/
  getFooter(): HTMLElement;

  /** Get text of action button */
  getActionButtonText(): string;

  /** naive way to check for stylable class */
  matchesActionButtonClassName(className: string): boolean;

  /** click on the action button */
  clickActionButton(): void;
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
  const footer = () => element.querySelector(`[data-hook='${DataHooks.footer}']`)

  return {
    exists: () => !!element,
    hasTitle: () => !!title(),
    hasBody: () => !!body(),
    hasActionButton: () => !!actionButton(),
    hasFooter: () => !!footer(),
    hasImage: () => !!image(),
    getImage: () => image() && (image().childNodes[0] as HTMLElement),
    getFooter: () => footer() && (footer().childNodes[0] as HTMLElement),
    getTitleContent: () => title().textContent,
    getBodyContent: () => body().textContent,
    getActionButtonText: () => actionButton().textContent,
    matchesActionButtonClassName: className =>
      !!Array.from(actionButton().classList).find(c => c.includes(className)),
    clickActionButton: () => factoryParams.eventTrigger.click(actionButton())
  };
};
