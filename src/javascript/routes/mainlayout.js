import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router"

import Slider from './../components/slider/slider.js'
import Search from './../components/search/search.js'
import Hero from './../components/hero/hero.js'
import CallWidget from './../components/call-widget/call-widget.js'


let MainLayout = React.createClass({

  render() {
    return (

        <div>
          <div className="container">
            <Slider />
          </div>
          <Search />
          <Hero />
          <CallWidget />

          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/welcome">Welcome</Link></li>
            </ul>
            {this.props.children}
          </div>
        </div>
    );
  }
});

export default MainLayout;
