// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import s from './profile.module.css';
import { Controls } from './Controls/Controls';
import { Statistics } from './Statistics/Statistics';

export class Profile extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total:0,
    percentage:0,
  };
  state = {
    valueGood: this.props.good,
    valueNeutral: this.props.neutral,
    valueBad: this.props.bad,
    valueTotal: this.props.total,
    valuePercentage: this.props.percentage,
  };

  increaseNumber = () => {
    this.setState(prevState => ({
      valueGood: prevState.valueGood + 1,
      valueNeutral: prevState.valueNeutral+1,
      valueBad: prevState.valueBad+1,
    }));
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage() 
  };

  countTotalFeedback = () => {
  this.setState(prevState => ({
    valueTotal : prevState.valueGood+prevState.valueNeutral+prevState.valueBad,
  }));

  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      valuePercentage: Math.round((prevState.valueGood+prevState.valueNeutral)/(prevState.valueGood+prevState.valueNeutral+prevState.valueBad)*100),
    }))}

  render() {
    return (
      <div className={s.feedback}>
        <div className={s.feedback__title}>
          <p>Please leave feedback</p>
        </div>
        <Controls increaseNumber={this.increaseNumber} />
        <div className={s.feedback__title}>
          <p>Statistics</p>
        </div>
        <Statistics
          good={this.state.valueGood}
          neutral={this.state.valueNeutral}
          bad={this.state.valueBad}
          total={this.state.valueTotal}
          positivePercentage={this.state.valuePercentage}
        />
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
