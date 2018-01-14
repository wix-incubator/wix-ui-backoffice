import * as React from 'react';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import * as s from './style.scss';

export default () => {
  const style = {
    color: '#F00'
  };

  return (
    <div className={s.iconList}>
      <div className={s.singleIconView}>
        <span style={style}><Duplicate size="3em"/></span>
        <span className={s.iconName}>Duplicate (size x 3, red)</span>
      </div>
    </div>
  );
};
