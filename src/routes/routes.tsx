import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Tasks from '../pages/Tasks';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/tasks" component={Tasks} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
