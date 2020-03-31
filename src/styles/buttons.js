import styled from 'styled-components';
import { white, black, lightGray, borderGray, mainBlue } from '../styles/colors';

export const Button = styled.button`
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s, filter 0.2s;
  position: relative;
  cursor: pointer;
  outline: none;
  line-height: 1.25em;
  font-size: calc(12px + 0.5vmin);
  color: ${black};
  padding: 1em 1.25em;
  background: ${lightGray};
  border: 1px solid ${borderGray};
  box-sizing: border-box;
  border-radius: 2.5em;
  transform-origin: center bottom;
  overflow: hidden;

  &:after {
    transition: right 0.2s, bottom 0.2s, right 0.2s, width 0.2s, height 0.2s, opacity 0.2s;
    transition-timing-function: ease-out;
    position: absolute;
    display: block;
    content: '';
    right: -100%;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${white};
    opacity: 0;
    transform: skew(135deg);
  }

  > svg {
    position: relative;
    top: 0.15em;
    margin-right: 0.25em;
  }

  &.primary {
    color: ${white};
    background: ${mainBlue};
    border: none;
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(-0.25em)scale(1.025);
    box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.6);

    &:after {
      right: -50%;
      opacity: 0.1;
    }
  }

  &:active {
    opacity: 1;
    transform: scale(1);
    filter: brightness(0.9);
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.7);

    &:after {
      width: 150%;
      right: -25%;
      opacity: 0.3;
    }
  }
`;


export const Link = styled(Button)`
  font-size: 1em;
  padding: 0.25em 0.35em;


  &:hover {
    transform: translateY(-0.1em)scale(1.025);
  }
`;
