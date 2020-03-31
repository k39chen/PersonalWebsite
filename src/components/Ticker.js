import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { localize } from '../helpers/localize';
import personalData from '../assets/data.json';
import { white, borderGray, mainBlue } from '../styles/colors';
import { miniHeading, wellShadow, computeTriangleLeftStyles, computeTriangleRightStyles } from '../styles/common';

const TIMER_LABEL_WIDTH__EM = 15;

const Container = styled.div`
  font-size: calc(12px + 0.5vmin);
`;

const Timer = styled.div`
  position: relative;
  display: flex;
  padding: 1.5em 1.5em 1.75em;
  border: 1px solid ${borderGray};
  border-top: 2px solid ${mainBlue};
  background-color: ${white};
  box-shadow: ${wellShadow};
`;

const TimerLabel = styled.div`
  position: absolute;
  top: calc(-1em - 1px);
  left: calc(50% - ${TIMER_LABEL_WIDTH__EM / 2}em);
  width: ${TIMER_LABEL_WIDTH__EM}em;
  ${miniHeading}
`;

const TriangleStart = styled.div`
  ${computeTriangleLeftStyles('1em', mainBlue)}
`;

const TriangleEnd = styled.div`
  ${computeTriangleRightStyles('1em', mainBlue)}
`;

const TimerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1.5em;
`;

const TimerItemValue = styled.span`
  font-size: 2em;
`;

const TimerItemLabel = styled.span`
  text-transform: uppercase;
  font-size: 0.7em;
`;

export default class Ticker extends React.Component {
  static defaultProps = {
    startTime: null
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  }

  render() {
    return (
      <Container>
        <Timer>
          <TimerLabel>
            <TriangleStart></TriangleStart>
            <span>{localize('Splash', 'actively_coding_for')}</span>
            <TriangleEnd></TriangleEnd>
          </TimerLabel>

          <TimerItem>
            <TimerItemValue>{this._computeYears(personalData.codingStartDate, this.state.counter)}</TimerItemValue>
            <TimerItemLabel>{localize('Time', `years`)}</TimerItemLabel>
          </TimerItem>


          <TimerItem>
            <TimerItemValue>{this._computeMonths(personalData.codingStartDate, this.state.counter)}</TimerItemValue>
            <TimerItemLabel>{localize('Time', `months`)}</TimerItemLabel>
          </TimerItem>


          <TimerItem>
            <TimerItemValue>{this._computeDays(personalData.codingStartDate, this.state.counter)}</TimerItemValue>
            <TimerItemLabel>{localize('Time', `days`)}</TimerItemLabel>
          </TimerItem>


          <TimerItem>
            <TimerItemValue>{this._computeHours(personalData.codingStartDate, this.state.counter)}</TimerItemValue>
            <TimerItemLabel>{localize('Time', `hours`)}</TimerItemLabel>
          </TimerItem>


          <TimerItem>
            <TimerItemValue>{this._computeMinutes(personalData.codingStartDate, this.state.counter)}</TimerItemValue>
            <TimerItemLabel>{localize('Time', `minutes`)}</TimerItemLabel>
          </TimerItem>


          <TimerItem>
            <TimerItemValue>{this._computeSeconds(personalData.codingStartDate, this.state.counter)}</TimerItemValue>
            <TimerItemLabel>{localize('Time', `seconds`)}</TimerItemLabel>
          </TimerItem>
        </Timer>

      </Container>
    );
  }

  _computeDuration(startDate) {
    const startTimeISO = new Date(startDate);
    const startTime = moment(startTimeISO);
    const currTime = moment();
    const diff = currTime.diff(startTime);
    return moment.duration(diff);
  }

  _computeYears(startDate) {
    return this._computeDuration(startDate).years();
  }

  _computeMonths(startDate) {
    return this._computeDuration(startDate).months();
  }

  _computeDays(startDate) {
    return this._computeDuration(startDate).days();
  }

  _computeHours(startDate) {
    return this._computeDuration(startDate).hours();
  }

  _computeMinutes(startDate) {
    return this._computeDuration(startDate).minutes();
  }

  _computeSeconds(startDate) {
    return this._computeDuration(startDate).seconds();
  }
}
