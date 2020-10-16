import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clockFace from "../img/clockFace.svg";
import hourHand from "../img/hourHand.svg";
import minuteHand from "../img/minuteHand.svg";
import secondHand from "../img/secondHand.svg";
import moment from "moment";


class Clock extends Component {
  static propTypes = {
    // id: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // zone: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  constructor({id, name, zone}) {
    super();
    console.log("constructor")
    this.id = id;
    this.zone = Number(zone);
    this.name = name;
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
    };
    this.interval = null;
    this.styles = {
      hour: null,
      minute: null,
      second: null
    }
  }

  render() {
    return (
      <div className="clock">
        <div className="nameAndClose">
          <span>{this.name}</span>
          <button className="close" onClick={() => this.props.onClose(this.id)}>X</button>
        </div>
        <div className="clockFace_container">
          <img src={clockFace} alt="clock face"/>
          <div>
            <img src={hourHand} style={{transform: `${this.styles.hour}`}} className="hands hours" alt="hour hand" />
            <img src={minuteHand} style={{transform: `${this.styles.minute}`}} className="hands minute" alt="minute hand" />
            <img src={secondHand} style={{transform: `${this.styles.second}`}} className="hands second" alt="second hand" />
          </div>
        </div>
        <span>{this.state.hour}:{this.state.minute}:{this.state.second}</span>
      </div>
    );
  }

  getTime() {
    const hourAndZone = moment().hour() + this.zone;
    const hour = hourAndZone > 23 ? hourAndZone - 23 : hourAndZone;

    this.setState(prevState => {
      prevState.hour = hour;
      prevState.minute = moment().minute();
      prevState.second = moment().second();
    });
    // console.log(this.state)
  }

  arrowHourStyle() {
    console.log(this.state)
    return this.state.hour < 12 ? (360 / 12 * this.state.hour) : (360 / 12 * (this.state.hour - 12));
  }
  
  arrowMinuteSecondStyle(arrow) {
    console.log(this.state[arrow]);
    return 360 / 60 * this.state[arrow]
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.getTime();
    this.interval = setInterval(() => this.getTime(), 1000);
  }

  componentDidUpdate() {
    this.getTime();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Clock;