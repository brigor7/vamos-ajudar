import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Main from './pages/Main';
import Menu from './pages/Menu';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/newUser" component={NewUser} />
        <Route path="/main" component={Main} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}
