import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import Main from './pages/Main';
import { UserProvider } from './context/UserContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Routes() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <main className="AppBody">
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/main" exact component={Main} />
          </Switch>
        </main>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}
