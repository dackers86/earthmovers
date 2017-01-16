
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

import SliderStyle from './hero-slider.scss'

module.exports = React.createClass({
  render: function() {
  	var settings = {
      infinite: true,
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true
    }
    return (
    	<div className='hero-slider'>
      	<Slider {...settings}>
        	<div><img src='http://res.cloudinary.com/earthmovers/image/upload/v1483629179/Main%20Site/Case-Cat-excavators-5.jpg' /></div>
          <div><img src='http://res.cloudinary.com/earthmovers/image/upload/v1483629182/Main%20Site/Volvo-ADT-1.jpg' /></div>
          <div><img src='http://res.cloudinary.com/earthmovers/image/upload/v1483629183/Main%20Site/Volvo-Komatsu-excavators-4.jpg' /></div>
        </Slider>
      </div>
    );
  }
});
