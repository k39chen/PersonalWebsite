import React from 'react';
import Swerve from '../components/Swerve';
import styled from 'styled-components';
import { white, superLightGray } from '../styles/colors';

const Container = styled.section`
  position: relative;
  min-height: 40vh;
  padding: 1em 0 15vh;
  background-color: ${superLightGray};
  text-align: center;

  &.even {
    background-color: ${white};
  }

  &.last > .swerve {
    display: none;
  }
`;

const Content = styled.div`
  text-align: center;
`;

export default class Splash extends React.Component {
  static defaultProps = {
    id: '',
    odd: false,
    even: false,
    last: false
  };

  render() {
    return (
      <Container
        id={this.props.id}
        className={this._computeContainerStyles(this.props.even, this.props.last)}>

        <Content>{this.props.content}</Content>

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
