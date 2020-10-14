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
    this.id = id;
    this.zone = Number(zone);
    this.name = name;
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
    };
    this.interval = null;
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
            <img src={hourHand} className="hands hours" alt="hour hand" />
            <img src={minuteHand} className="hands minute" alt="hour hand" />
            <img src={secondHand} className="hands second" alt="hour hand" />
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

  componentDidMount() {
    this.interval = setInterval(() => this.getTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Clock;