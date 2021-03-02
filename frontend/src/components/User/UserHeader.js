import React, { useState, useEffect } from 'react';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/familia':
        setTitle('Familia');
        break;
      case '/conta/integrantes':
        setTitle('Integrantes');
        break;
      case '/conta/generos':
        setTitle('Generos');
        break;
      case '/conta/auxilio':
        setTitle('Auxilio');
        break;
      case '/conta/estatistica':
        setTitle('Estatisticas');
        break;

      default:
        setTitle('Minha conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
