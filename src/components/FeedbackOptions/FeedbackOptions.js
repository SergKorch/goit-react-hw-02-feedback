import React from 'react';
import s from '../feedback.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={s.feedback__section}>
      <li>
        <button
          className={s.feedback__button}
          type="button"
          name='good'
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={s.feedback__button}
          type="button"
          name='neutral'
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={s.feedback__button}
          type="button"
          name='bad'
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
