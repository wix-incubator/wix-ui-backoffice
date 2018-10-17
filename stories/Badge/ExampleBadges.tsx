import * as React from 'react';
import * as styles from './ExampleBadges.scss';

//import {Badge} from 'wix-ui-backoffice/Badge';
import {Badge} from '../../src/components/deprecated/Badge';

//import {SIZE, SKIN, TYPE} from 'wix-ui-backoffice/Badge';
import {SIZE, SKIN, TYPE} from '../../src/components/deprecated/Badge';

const skins = Object.keys(SKIN);
const sizes = Object.keys(SIZE);
const sizesString = sizes.join(', ');
const types = Object.keys(TYPE);
const typesString = types.join(', ');

export default () => (
  <div data-hook="badge-variations">
    {skins.map(skin => (
        <div key={skin}>
          skin: {skin} | sizes: {sizesString} | types: {typesString} | upppercase: true, false
          <div className={styles.wrapper}>
            {renderSizes({skin})}
            {renderBadge({uppercase: false, skin})}
          </div>
        </div>
      )
    )}
  </div>);

const renderSizes = props => (sizes.map(size => renderTypes({size, ...props})));
const renderTypes = props => (types.map(type => renderBadge({type, ...props})));

const renderBadge = props => (
  <span className={styles.option} key={props.size + props.type}>
    <Badge {...props}>Some Badge</Badge>
  </span>);


