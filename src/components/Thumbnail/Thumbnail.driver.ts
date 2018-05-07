import {ComponentFactory} from 'wix-ui-test-utils/driver-factory';
import {thumbnailDriverFactory as coreTuhmbnailDriverFactory, ThumbnailDriver as CoreThumbnailDriver} from 'wix-ui-core/dist/src/components/Thumbnail/Thumbnail.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './Thumbnail.st.css';
import {textDriverFactory, TextDriver} from '../Text/Text.driver';
import {DriverFactory} from 'wix-ui-test-utils/driver-factory';

export interface ThumbnailDriver extends CoreThumbnailDriver {
  titleDriver: () => TextDriver; 
  getTitle: () => string;
  hasDescription: () => boolean;
  getDescription: () => string;
  hasImage: () => boolean;
  getImage: () => HTMLElement;
}

export const thumbnailDriverFactory = ({ element, eventTrigger, wrapper }: ComponentFactory): ThumbnailDriver => {
  const coreThumbnailDriver = coreTuhmbnailDriverFactory({element, eventTrigger, wrapper});
  const stylableDOMUtil = new StylableDOMUtil(style, element);
  const titleDriver = textDriverFactory({element: stylableDOMUtil.select('.title'), wrapper, eventTrigger});
  const descriptionDriver = textDriverFactory({element: stylableDOMUtil.select('.description'), wrapper, eventTrigger});
  const image = element.querySelector('[data-hook="image"]');

  return {
    ...coreThumbnailDriver,
    titleDriver: () => titleDriver,
    /** returns the title of the thumbnail */
    getTitle: () => titleDriver.getText(),
    /** returns true if the thumbnail has description */
    hasDescription: () => descriptionDriver.exists(),
    /** returns the description of the thumbnail */
    getDescription: () => descriptionDriver.getText(),
    /** returns the image of the thumbnail */
    getImage: () => image && image.childNodes[0] as HTMLElement,
    /** returns true if the thumbnail has an image */
    hasImage: () => !!image
  };
};
