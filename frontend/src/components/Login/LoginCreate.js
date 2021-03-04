import React, { useState, useContext } from 'react';
import styles from './LoginForm.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import InputThumbnail from '../Forms/InputThumbnail';
import { UserContext } from '../../context/UserContext';
import useForm from '../hooks/useForm';
import Error from '../helpers/Error';

const LoginCreate = () => {
  const nome = useForm();
  const apelido = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const [thumbnail, setThumbnail] = useState('');
  const { userCreate, error, loading } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.validate() && password.validate())
      userCreate(
        nome.value,
        apelido.value,
        email.value,
        password.value,
        thumbnail
      );
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <InputThumbnail setThumbnail={setThumbnail} thumbnail={thumbnail} />
        <Input label="Nome" type="text" name={'nome'} {...nome} required />
        <Input
          label="Apelido"
          type="apelido"
          name={'apelido'}
          {...apelido}
          required
        />
        <Input label="Email" type="email" nome={'email'} {...email} required />
        <Input
          label="Senha"
          type="password"
          nome={'password'}
          {...password}
          required
        />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default LoginCreate;
