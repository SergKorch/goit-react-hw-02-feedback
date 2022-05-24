import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import s from './feedback.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Number(((good / total) * 100).toFixed(0));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    let percentage = this.countPositiveFeedbackPercentage()
  
    return (
      <div className={s.feedback}>
        <div className={s.feedback__title}>
          <p>Please leave feedback</p>
        </div>
        <FeedbackOptions options={0} onLeaveFeedback={this.onLeaveFeedback}/>
        <div className={s.feedback__title}>
          <p>Statistics</p>
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        />
      </div>
    );
  }
}
