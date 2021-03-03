import React from 'react';
import { ReactComponent as Warning } from '../assets/lnr-warning.svg';

const NotFound = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.title} class="title">
        Erro 404
      </h1>

      <p style={styles.paragrafo}>
        <Warning /> A Página não foi encontrada!
      </p>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10rem',
  },

  paragrafo: {
    fontSize: '1.675rem',
  },

  title: {
    fontSize: '3rem',
  },
};

export default NotFound;
