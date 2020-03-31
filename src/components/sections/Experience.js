import React from 'react';
import styled from 'styled-components';
import { localize } from '../../helpers/localize';

export default class SectionExperience extends React.Component {
  render() {
    return (
      <div className="section-title">{localize('Common', 'experience')}</div>
    );
  }
}
