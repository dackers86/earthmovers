
import React from 'react';
import ReactDOM from 'react-dom';

import WidgetStyle from './call-widget.scss'

module.exports = React.createClass({
  render: function() {
    return (
      <div class="textwidget">
        <div class="phone">
          <h2>CALL US NOW</h2>
          <h3>+44 (0) 2086394400</h3>
        </div>


        <div class="next">
          <h3>
            <a title=" info@earthmoversmagazine.co.uk" href="mailto: info@earthmoversmagazine.co.uk"> info@earthmoversmagazine.co.uk</a>
          </h3>
        </div>

      </div>
    );
  }
});
