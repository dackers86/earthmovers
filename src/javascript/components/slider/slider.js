
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

import SliderStyle from './slider.scss'

module.exports = React.createClass({
  render: function() {
  	var settings = {
      infinite: true,
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
    return (
    	<div className='slider'>
      	<Slider {...settings}>
        	<div><img src='http://res.cloudinary.com/earthmovers/image/upload/v1483629178/Main%20Site/Digger-Bidder.jpg' /></div>
          <div><img src='http://res.cloudinary.com/earthmovers/image/upload/v1483629178/Main%20Site/6-Ridgway-ad-859x94-1.gif' /></div>
        </Slider>
      </div>
    );
  }
});
