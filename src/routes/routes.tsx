import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SignIn} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
