import * as React from 'react';
import {string, node, oneOf} from 'prop-types';
import style from './Thumbnail.st.css';
import Check from 'wix-ui-icons-common/Check';
import {Thumbnail as CoreThumbnail, ThumbnailProps as CoreThumbnailProps} from 'wix-ui-core/Thumbnail';
import {withStylable} from 'wix-ui-core/withStylable';
import {Text} from '../Text';

export interface ThumbnailProps extends CoreThumbnailProps {
  /** image of the thumbnail */
  image?: React.ReactElement<any>;
  /** title of the thumbnail */
  title: string;
  /** description of the thumbnail */
  description?: string;
}

const StyledThumbnail = withStylable<CoreThumbnailProps>(
  CoreThumbnail,
  style,
  () => ({})
);

export const Thumbnail: React.SFC<ThumbnailProps> = props => {
  const {children, title, image, description, ...rest} = props;

  return (
      <StyledThumbnail {...rest} selectedIcon={<Check size="24"/>}>
        <div className={style.container}>
          {image && <div data-hook="image">{image}</div>}
          <Text className={style.title} data-hook="title" bold>{title}</Text>
          {description && <Text className={style.description} data-hook="description">{description}</Text>}
        </div>
      </StyledThumbnail>
  );
};

Thumbnail.displayName = 'Thumbnail';

Thumbnail.propTypes = {
  ...CoreThumbnail.propTypes,
  image: node,
  title: string.isRequired,
  description: string
};
