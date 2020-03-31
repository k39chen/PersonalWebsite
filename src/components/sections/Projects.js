import React from 'react';
import styled from 'styled-components';
import { localize } from '../../helpers/localize';

export default class SectionProjects extends React.Component {
  render() {
    return (
      <div className="section-title">{localize('Common', 'projects')}</div>
    );
  }
}
