import React from 'react';
import PropTypes from 'prop-types';
import s from './Hello.scss';

const Hello = ({name}) =>
  <div>
    Hello <span className={s.underline}>{name}!</span>
  </div>;

Hello.propTypes = {
  name: PropTypes.string.isRequired
};

export default Hello;
