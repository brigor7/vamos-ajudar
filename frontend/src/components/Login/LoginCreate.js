import React, { useState, useMemo } from 'react';
import style from './LoginForm.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import './LoginCreate.module.css';

const LoginCreate = () => {
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form>
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

        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
