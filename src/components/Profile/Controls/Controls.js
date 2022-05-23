import React from 'react';
import s from '../profile.module.css';

export const Controls = ({ increaseNumber }) => {
  return (
    <ul className={s.feedback__section}>
      <li>
        <button
          className={s.feedback__button}
          type="button"
          onClick={increaseNumber}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={s.feedback__button}
          type="button"
          onClick={increaseNumber}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={s.feedback__button}
          type="button"
          onClick={increaseNumber}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
