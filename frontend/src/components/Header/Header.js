import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <Logo />
        </Link>
        <Link className={styles.login} to="/login" aria-label="Home">
          Bem vindo(a) Zé das Couves
        </Link>
      </nav>
    </header>
  );
};

export default Header;
