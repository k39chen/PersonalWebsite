import React from 'react';
import Swerve from '../components/Swerve';
import styled from 'styled-components';
import sprintf from 'sprintf';
import moment from 'moment';
import logo from '../assets/logo/KC_Logo.svg';
import personalData from '../assets/data.json';
import { white, gray } from '../styles/colors';
import { localize } from '../helpers/localize';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${white};

  /*
  background-image: url('${process.env.PUBLIC_URL}/cloud.jpg');
  background-size: cover;
  */
`;

const Logo = styled.img`
  pointer-events: none;
`;

export const Caption = styled.div`
  margin-bottom: 0.55em;
  font-size: calc(12px + 0.75vmin);
  font-weight: bold;
  text-transform: uppercase;
  color: ${gray};
`;

export const Title = styled.div`
  font-size: calc(12px + 2vmin);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.25em;
`;

export const Subtitle = styled.div`
  margin-top: 2em;
  font-size: calc(12px + 0.5vmin);
`;

export default class Splash extends React.Component {
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
        <Logo src={logo} alt="logo" hidden />

        <Caption>{localize('Splash', 'front_end_developer')}</Caption>
        <Title>{personalData.fullName}</Title>

        <Subtitle dangerouslySetInnerHTML={{__html: this._computeSubtitleText(this.state.counter)}}></Subtitle>

        <Swerve />
      </Container>
    );
  }

  _computeSubtitleText(counter) {
    const startTimeISO = new Date(personalData.codingStartDate);

    const startTime = moment(startTimeISO);
    const currTime = moment();
    const diff = currTime.diff(startTime);
    const duration = moment.duration(diff);

    const y = duration.years();
    const mo = duration.months();
    const d = duration.days();
    const h = duration.hours();
    const min = duration.minutes();
    const s = duration.seconds();
    const sinceStr = [
      `<b>${y}</b> ${localize('Time', `year${y === 1 ? '' : 's'}`)}`,
      `<b>${mo}</b> ${localize('Time', `month${mo === 1 ? '' : 's'}`)}`,
      `<b>${d}</b> ${localize('Time', `day${d === 1 ? '' : 's'}`)}`,
      `<b>${h}</b> ${localize('Time', `hour${h === 1 ? '' : 's'}`)}`,
      `<b>${min}</b> ${localize('Time', `minute${min === 1 ? '' : 's'}`)}`,
      `<b>${s}</b> ${localize('Time', `second${s === 1 ? '' : 's'}`)}`
    ].join(', ');

    // Coding for 7 years, 4 months, 26 days, 4 hours, and 32 seconds
    return sprintf(localize('Splash', 'coding_for'), sinceStr);
  }
}
