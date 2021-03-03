import React, { useContext } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Home">
          <Logo />
        </Link>
        {data ? (
          <Link className={styles.login} to="/login" aria-label="Home">
            Ola, {data.apelido}!
          </Link>
        ) : (
          <Link className={styles.login} to="/login" aria-label="Home">
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
