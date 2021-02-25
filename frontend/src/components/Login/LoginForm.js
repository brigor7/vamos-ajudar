import React, { useContext } from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import './LoginForm.module.css';
import useForm from '../hooks/useForm';
import { UserContext } from '../../context/UserContext';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
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
