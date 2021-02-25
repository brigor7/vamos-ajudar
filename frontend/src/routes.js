import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/main" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
