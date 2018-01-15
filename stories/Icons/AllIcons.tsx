import * as React from 'react';
import * as Icons from 'wix-ui-icons-common';
import * as s from './style.scss';

const renderIcon = name => {
  return (
    <div className={s.singleIconView} key={name}>
      <span className={s.icon}>{React.createElement(Icons[name])}</span>
      <span className={s.iconName}>{name}</span>
    </div>
  );
};

export default () => {
  return (<div className={s.iconList}>
    {Object.keys(Icons).map(renderIcon)}
  </div>);
};
