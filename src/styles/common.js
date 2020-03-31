import { white, mainBlue } from './colors';

export const wellShadow = '0 0 1em rgba(0, 0, 0, 0.2)';

export const miniHeading = `
  height: 2em;
  line-height: 2em;
  color: ${white};
  background-color: ${mainBlue};
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  box-sizing: border-box;
`;

export const BASE_TRIANGLE_STYLES = `
  position: absolute;
  top: 0;
  display: block;
  content: '';
  width: 0;
  height: 0;
`;

export function computeTriangleLeftStyles(size = '1em', color = mainBlue) {
  return `
    ${BASE_TRIANGLE_STYLES}
    left: -${size};
    border-top: ${size} solid transparent;
    border-bottom: ${size} solid transparent;
    border-left: none;
    border-right: ${size} solid ${color};
  `;
}

export function computeTriangleRightStyles(size = '1em', color = mainBlue) {
  return `
    ${BASE_TRIANGLE_STYLES}
    right: -${size};
    border-top: ${size} solid transparent;
    border-bottom: ${size} solid transparent;
    border-left: ${size} solid ${color};
    border-right: none;
  `;
}
