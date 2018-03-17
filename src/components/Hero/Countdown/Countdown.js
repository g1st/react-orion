import React from 'react';
import './Countdown.css';

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 1724356343 - Date.now() / 1000 };
    this.timer = 0;
  }

  secondsToTime(secs) {
    let days = Math.floor(secs / (60 * 60) / 24);
    let hours = Math.floor((secs / (60 * 60)) % 24);

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds - 1);

    let obj = {
      d: days,
      h: hours < 10 ? '0' + hours : hours,
      m: minutes < 10 ? '0' + minutes : minutes,
      s: seconds < 10 ? '0' + seconds : seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeft = this.secondsToTime(this.state.seconds);

    this.setState({
      time: timeLeft
    });
    this.callItEverySecond();
  }

  callItEverySecond() {
    this.timer = setInterval(this.countDown.bind(this), 1000);
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="countdown">
        <div className="counter">
          <div className="days">{this.state.time.d}</div>
          <div className="vl" />
          <div className="hours">{this.state.time.h}</div>
          <div className="vl" />
          <div className="minutes">{this.state.time.m}</div>
          <div className="vl" />
          <div className="seconds">{this.state.time.s}</div>
        </div>
      </div>
    );
  }
}

export default Countdown;
