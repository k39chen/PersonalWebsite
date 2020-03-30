import React from 'react';
import styled from 'styled-components';
import { white, lightGray } from '../styles/colors';

const Svg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5vh;

  &.flipped {
    transform: scaleX(-1);
  }
`;

export default class Swerve extends React.Component {
  static defaultProps = {
    inverted: false,
    fillTop: white,
    fillBottom: lightGray
  };

  constructor(props) {
    super(props);

    const fillTop = props.inverted ? props.fillBottom : props.fillTop;
    const fillBottom = props.inverted ? props.fillTop : props.fillBottom;

    this.state = {
      fillTop,
      fillBottom,
      classes: props.classes
    };

    if (props.inverted) {
      this.state.classes = `${this.state.classes} flipped`;
    }
  }

  render() {
    return (
      <Svg
        className={this.state.classes}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 4.66666 0.333331"
        fill={this.state.fillTop}
        preserveAspectRatio="none">

          <path fill={this.state.fillBottom} d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"></path>

      </Svg>
    );
  }
}
