import React, { createContext, useState, useCallback, useEffect } from 'react';
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
      console.log(token);
      console.log(login);
      localStorage.setItem('token', token);
      if (login === true) {
        console.log('entrou no userLogin');
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

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          await getUser(token);

          if (login === false) throw new Error('Token Inválido');
        } catch (err) {
          setError(err.message);
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, [login, userLogout]);

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
      if (response.statusText !== 'OK')
        throw new Error('Token inválido. Realize o login novamente.');

      const { user } = await response.data;
      setData(user);
      setLogin(true);
    } catch (err) {
      setData(null);
      setLogin(false);
      setError(err);
    }
  }

  return (
    <UserContext.Provider
      value={{ error, loading, userLogin, userLogout, data, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
