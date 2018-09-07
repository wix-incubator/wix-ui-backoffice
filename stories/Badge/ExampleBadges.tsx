import * as React from 'react';
import * as styles from './ExampleBadges.scss';
import {Badge} from '../../src/components/Badge';
import {SIZE, SKIN, TYPE} from '../../src/components/Badge/constants';

export default props => (
  <div data-hook={props.dataHook}>
    {Object.keys(SKIN).map(skin => (
      <div className={styles.wrapper}>
        {renderSizes({skin})}
        {renderBadge({uppercase: false, skin})}
      </div>))}
  </div>);
const renderSizes = props => (Object.keys(SIZE).map(size => renderTypes({size, ...props})));
const renderTypes = props => (Object.keys(TYPE).map(type => renderBadge({type, ...props})));

const renderBadge = props => (
  <span className={styles.option}>
    <Badge {...props}>Some Badge</Badge>
  </span>);


