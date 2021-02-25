import React, { useState } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import './LoginForm.module.css';
import api from '../../connection';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = await api.post('/session', { email, password });
      console.log(token.data);
      if (token) {
        localStorage.setItem('token', JSON.stringify(token.data));
        navigate.push('/main');
      }
    } catch (error) {
      setErro('Ocorreu um erro. ' + erro);
    } finally {
      setErro(null);
      setLoading(false);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="style.form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          name="senha"
          label="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {erro && <p className="error">{erro}</p>}
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
