import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import s from './feedback.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

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
    let percentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={0} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {total>0 ?
        (<Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        </Section>) : (<Notification message="There is no feedback"/>)}
      </div>
    );
  }
}
