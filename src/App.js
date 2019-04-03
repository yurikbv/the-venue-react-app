import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './resources/styles.scss';
import Header from "./components/header_footer/Header";
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import HighLights from './components/highlights';
import Pricing from './components/pricing/imdex';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueinfo">
          <VenueInfo/>
        </Element>

        <Element name="highlights">
          <HighLights/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Footer/>
      </div>
    );
  }
}

export default App;
