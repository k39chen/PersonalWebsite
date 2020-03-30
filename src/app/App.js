import React from 'react';
import Splash from '../components/Splash';
import Section from '../components/Section';
import { localize } from '../helpers/localize';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Splash />
        <div>
          <Section title={localize('Common', 'about')} odd />
          <Section title={localize('Common', 'projects')} even />
          <Section title={localize('Common', 'contact')} odd last />
        </div>
      </div>
    );
  }
}
