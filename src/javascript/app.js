import React from "react";
import { Router, Route, IndexRoute, Link, History } from "react-router"
import createBrowserHistory from 'history/lib/createBrowserHistory'


import Home from './routes/home'
import Welcome from './routes/welcome'
import MainLayout from './routes/mainlayout'


React.render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="welcome" component={Welcome}>
      </Route>
    </Route>
  </Router>,
  document.getElementById("app")
);
