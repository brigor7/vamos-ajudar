import React, { createContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../connection';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  const [login, setLogin] = useState('');
  const navigate = useNavigate();

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const response = await api.post('/session', { email, password });
      const { token } = await response.data;
      await getUser(token);
      if (login) {
        console.log('entrou no token valido!');
        localStorage.setItem('token', JSON.stringify(token));
        navigate('/conta');
      }
    } catch (error) {
      setError('Erro ao realizar o logon' + error);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate]
  );

  async function getUser(token) {
    try {
      const response = await api.post(
        '/session/jwt',
        { body: '' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.data;

      setData(JSON.stringify(json));
      setLogin(true);
    } catch (err) {
      setError('Token inválido. Realize o login novamente.');
    }
  }

  return (
    <UserContext.Provider value={{ error, loading, userLogin, data, login }}>
      {children}
    </UserContext.Provider>
  );
};
