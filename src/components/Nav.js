import React from 'react';
import styled from 'styled-components';
import { FaAngleUp, FaFileAlt, FaLinkedin, FaGithub, FaMoon } from 'react-icons/fa';
import { mainBlue } from '../styles/colors';
import { localize } from '../helpers/localize';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavLink = styled.div`
  transition: background 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: ${mainBlue};
  border-radius: 2em;

  > svg {
    margin-right: 0.2em;
    font-size: 1.5em;
  }

  &:hover {
    background-color: #e5f1f7;
  }
`;

export default class Nav extends React.Component {
  render() {
    return (
      <Container>
        <NavLink><FaAngleUp /> Back to Top</NavLink>
        <NavLink><FaFileAlt /> {localize('Common', 'resume')}</NavLink>
        <NavLink><FaLinkedin /> {localize('Common', 'linkedin')}</NavLink>
        <NavLink><FaGithub /> {localize('Common', 'github')}</NavLink>
        <NavLink><FaMoon /> {localize('Common', 'dark_mode')}</NavLink>
      </Container>
    );
  }
}
