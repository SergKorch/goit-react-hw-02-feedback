import React from 'react';
import s from '../profile.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
    <li className={s.statistics__text}>
      <p>Good: {good} </p>
    </li>
    <li className={s.statistics__text}>
      <p>Neutral: {neutral} </p>
    </li>
    <li className={s.statistics__text}>
      <p>Bad: {bad} </p>
    </li>
    <li className={s.statistics__text}>
      <p>Total: {total}</p>
    </li>
    <li className={s.statistics__text}>
      <p>Positive feedback: {positivePercentage}%</p>
    </li>
  </ul>
  );
};
