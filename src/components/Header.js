import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo/KC_Logo.svg';
import Nav from '../components/Nav';

const Container = styled.div`
  position: sticky;
  z-index: 1000;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(5em);
  padding: 1em 1.5em;
  box-sizing: border-box;
`;

const Logo = styled.img`
  transition: opacity 0.2s, transform 0.2s, filter 0.2s;
  cursor: pointer;
  height: 100%;

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }

  &:active {
    opacity: 1;
    transform: scale(1);
    filter: brightness(0.9);
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <Container id="header">
        <Logo
          src={logo}
          onClick={this._handleEventLogoClick} />

        <Nav />

      </Container>
    );
  }

  _handleEventLogoClick(ev) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
