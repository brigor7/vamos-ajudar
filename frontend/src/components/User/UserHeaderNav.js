import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import useMedia from '../../hooks/useMedia';
import styles from './UserHeaderNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Auxilio } from '../../assets/lnr-gift.svg';
import { ReactComponent as Sair } from '../../assets/lnr-exit.svg';
import { ReactComponent as Estatistica } from '../../assets/lnr-pie-chart.svg';
import { ReactComponent as Integrante } from '../../assets/lnr-shirt.svg';
import { ReactComponent as Familia } from '../../assets/lnr-heart.svg';
import { ReactComponent as Generos } from '../../assets/lnr-cart.svg';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const isMobile = useMedia('(max-width:40rem)');

  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end activeClassName={styles.active}>
          <Auxilio />
          {isMobile && 'Minhas Conta'}
        </NavLink>
        <NavLink to="/conta/estatistica" activeClassName={styles.active}>
          <Estatistica />
          {isMobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/familia" activeClassName={styles.active}>
          <Familia />
          {isMobile && 'Família'}
        </NavLink>

        <NavLink to="/conta/genero" activeClassName={styles.active}>
          <Generos />
          {isMobile && 'Gêneros'}
        </NavLink>
        <NavLink to="/conta/integrante" activeClassName={styles.active}>
          <Integrante />
          {isMobile && 'Estatísticas'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
