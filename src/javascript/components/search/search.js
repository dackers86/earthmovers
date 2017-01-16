
import React from 'react';
import ReactDOM from 'react-dom';


module.exports = React.createClass({
  render: function() {
    return (
    	<div>
      	<input type="text" className="search-box" placeholder="" />
        <input type="submit" value="Search" id="submit" />
      </div>
    );
  }
});
