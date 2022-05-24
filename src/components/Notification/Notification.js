// import PropTypes from 'prop-types';
import React from 'react';
import s from '../feedback.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      {message && (
        <div className={s.feedback__title}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};