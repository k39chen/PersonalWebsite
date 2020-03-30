import React from 'react';
import Swerve from '../components/Swerve';
import styled from 'styled-components';
import { white, lightGray } from '../styles/colors';

export const Container = styled.section`
  position: relative;
  height: 40vh;
  padding: 3em 0;
  background-color: ${lightGray};
  text-align: center;

  &.even {
    background-color: ${white};
  }

  &.last > .swerve {
    display: none;
  }
`;

export const SectionTitle = styled.h1`
  text-transform: uppercase;
`;

export default class Splash extends React.Component {
  static defaultProps = {
    title: 'test',
    odd: false,
    even: false,
    last: false
  };

  render() {
    return (
      <Container className={this._computeContainerStyles(this.props.even, this.props.last)}>
        <SectionTitle>{this.props.title}</SectionTitle>
        <Swerve classes="swerve" inverted={this.props.odd} />
      </Container>
    );
  }

  _computeContainerStyles(even, last) {
    const styles = [];
    if (even) styles.push('even');
    if (last) styles.push('last');
    return styles.join(' ');
  }
}
