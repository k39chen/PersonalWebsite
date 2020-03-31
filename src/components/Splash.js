import React from 'react';
import Ticker from '../components/Ticker';
import Swerve from '../components/Swerve';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';
import logo from '../assets/logo/KC_Logo.svg';
import personalData from '../assets/data.json';
import { localize } from '../helpers/localize';
import { white, gray, mainBlue } from '../styles/colors';
import { Button } from '../styles/buttons';

const Container = styled.div`
  position: relative;
  min-height: 90vh;
  background-color: ${white};
`;

const Background = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:before {
    position: absolute;
    top: -250%;
    left: -250%;
    display: block;
    content: '';
    width: 500%;
    height: 500%;
    background-image: url(${process.env.PUBLIC_URL}/images/grid.png);
    opacity: 0.3;
    transform: rotate(75deg);
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient(ellipse, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 75%, rgba(255, 255, 255, 1));
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  pointer-events: none;
  width: 10vw;
  max-width: 216px;
  margin-bottom: 4em;
`;

const Caption = styled.div`
  margin-bottom: 0.55em;
  font-size: calc(12px + 0.75vmin);
  font-weight: bold;
  text-transform: uppercase;
  color: ${gray};
`;

const Title = styled.div`
  margin-bottom: 1.75em;
  font-size: calc(12px + 2vmin);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.25em;
`;

const Divider = styled.div`
  width: 5em;
  height: 5px;
  margin: 1.5em 0 2em;
  background-color: ${mainBlue};
`;

const ContinueButton = styled(Button)`
  min-width: 15em;
  margin-top: 4em;
  padding-right: 1.25em;
`;

export default class Splash extends React.Component {
  render() {
    return (
      <Container id="splash">
        <Background></Background>

        <Content>
          <Logo src={logo} alt="logo" />

          <Caption>{localize('Splash', 'front_end_web_developer')}</Caption>
          <Title>{personalData.fullName}</Title>

          <Divider hidden></Divider>

          <Ticker></Ticker>

          <ContinueButton className="primary" onClick={this._handleEventContinueButtonClick}>
            <FaAngleDown />
            {localize('Common', 'learn_more')}
          </ContinueButton>

        </Content>

        <Swerve />
      </Container>
    );
  }

  _handleEventContinueButtonClick(ev) {
    ev.stopPropagation();

    const sectionAboutEl = document.getElementById('about');
    const bcr = sectionAboutEl.getBoundingClientRect();

    window.scroll({ top: bcr.top, left: 0, behavior: 'smooth' });
  }
}
