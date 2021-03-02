import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as LogoTransparente } from '../../assets/logoTransparente.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Faça parte <br />
        desse movimento!
      </p>
      <Link className={styles.logo} to="/" aria-label="Home">
        <LogoTransparente />
      </Link>
    </footer>
  );
};

export default Footer;
