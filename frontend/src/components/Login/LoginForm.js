import React, { useState } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import './LoginForm.module.css';
import api from '../../connection';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email.validate() && password.validate()) {
        console.log('validou email e senha');
        setLoading(true);
        const token = await api.post('/session', {
          email: email.value,
          password: password.value,
        });

        if (token) {
          localStorage.setItem('token', JSON.stringify(token.data));
          navigate.push('/main');
        }
      }
    } catch (err) {
      setError('Ocorreu um erro. ' + err);
    } finally {
      setLoading(false);
      setError(null);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="style.form" onSubmit={handleSubmit}>
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...password} />
        {error && <p className="error">{error}</p>}
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
    </section>
  );
};

export default LoginForm;
