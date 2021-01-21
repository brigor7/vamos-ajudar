import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewUser from './pages/newUser';
import Check from './pages/Check';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/newUser" component={NewUser} />
        <Route path="/check" component={Check} />
      </Switch>
    </BrowserRouter>
  );
}
