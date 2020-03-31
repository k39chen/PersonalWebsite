import React from 'react';
import styled from 'styled-components';
import { localize } from '../../helpers/localize';

const MapToHome = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 800px;
  border: none;
`;

export default class SectionContact extends React.Component {
  render() {
    return (
      <div>
        <div className="section-title">{localize('Common', 'contact')}</div>

        <MapToHome title="mapToHome" src={this._computeGoogleMapsSrcPath()}></MapToHome>

        <a href="mailto:me@domain.com?subject=Call me&body=dummy mail:" target="_blank"> touch here</a>
      </div>
    );
  }

  _computeGoogleMapsSrcPath() {
    return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.380799588812!2d-79.38384918381736!3d43.66104955993996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b4df9546bf%3A0x8391ba3cc8302549!2s25%20Carlton%20St%2C%20Toronto%2C%20ON%20M5B%201L4!5e0!3m2!1sen!2sca!4v1585662316442!5m2!1sen!2sca';
  }
}
