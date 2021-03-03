import React, { useState, useMemo } from 'react';
import style from './LoginForm.module.css';
import { ReactComponent as Camera } from '../../assets/lnr-camera.svg';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import stylesThumb from './LoginCreate.module.css';

const LoginCreate = () => {
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form className={style.form} onSubmit={handleSubmit}>
        <span className={stylesThumb.thumbContainer}>
          <span id={stylesThumb.thumbnail}>
            <label
              id="thumbnail"
              style={{ backgroundImage: `url(${preview})` }}
              className={thumbnail ? 'has-thumbnail' : ''}
            >
              <input
                type="file"
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                }}
              />
              <span className={stylesThumb.svg}>
                <Camera />
              </span>
            </label>
          </span>
        </span>
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
