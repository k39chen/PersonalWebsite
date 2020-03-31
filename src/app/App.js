import React from 'react';
import throttle from 'lodash/throttle';
import Header from '../components/Header';
import Splash from '../components/Splash';
import Section from '../components/Section';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default class App extends React.Component {
  static handleEventWindowResize;

  constructor(props) {
    super(props);
    this.state = {
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  }

  componentDidMount() {
    App.handleEventWindowResize = (function () {
      this.setState({
        windowSize: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    }).bind(this);

    window.addEventListener('resize', throttle(App.handleEventWindowResize, 200));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', App.handleEventWindowResize);
  }

  render() {
    return (
      <div>
        <Header />
        <Splash windowSize={this.state.windowSize} />
        <div>
          <Section id="about" content={<About />} odd />
          <Section id="projects" content={<Projects />} even />
          <Section id="Experience" content={<Experience />} odd />
          <Section id="contact" content={<Contact />} even last />
        </div>
      </div>
    );
  }
}
