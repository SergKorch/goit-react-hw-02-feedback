// import PropTypes from 'prop-types';
import React from 'react';
import s from '../feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      {title && (
        <div className={s.feedback__title}>
          <p>{title}</p>
        </div>
      )}
      {children}
    </div>
  );
};
