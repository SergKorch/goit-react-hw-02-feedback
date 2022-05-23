// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import s from './profile.module.css';
import {Controls} from './Controls/Controls'
import { Statistics } from './Statistics/Statistics';

export class Profile extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increaseNumber = () => {
    console.log('plus');
  };

  countTotalFeedback = () => {
    const total = 0;
  };
  countPositiveFeedbackPercentage = () => {
    const percentage = 0;
  };

  render() {
    return (
      <div className={s.feedback}>
        <div className={s.feedback__title}>
          <p>Please leave feedback</p>
        </div>
        <Controls increaseNumber={this.increaseNumber}/>
        <div className={s.feedback__title}>
          <p>Statistics</p>
        </div>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={0} positivePercentage={0}/>
      </div>
    );
  }
}

// Profile.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };
