import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as LogoTransparente } from '../../assets/logoTransparente.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} to="/" aria-label="Home">
        <LogoTransparente />
      </Link>
      <p>Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
