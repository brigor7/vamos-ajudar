import React from 'react';
import styles from './Login.module.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Switch>
          <Route path="/" element={LoginForm} />
          <Route path="/criar" element={LoginCreate} />
          <Route path="/perdeu" element={LoginPasswordLost} />
          <Route path="/resetar" element={LoginPasswordReset} />
        </Switch>
      </div>
    </section>
  );
};

export default Login;
