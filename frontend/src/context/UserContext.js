import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../connection';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();

  async function userLogin(email, password) {
    setError(null);
    setLoading(true);
    api
      .post('/session', {
        email,
        password,
      })
      .then((token) => {
        localStorage.setItem('token', JSON.stringify(token.data));
        navigate.push('/main');
      })
      .catch((err) => {
        setError('Usuario ou senha inválidos');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <UserContext.Provider value={{ error, loading, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
