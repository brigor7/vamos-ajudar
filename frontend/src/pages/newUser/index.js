import React, { useState } from 'react';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../connection';
import './style.css';

export default function NewUser() {
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRetyped, setPasswordRetyped] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await api.post('user', {
        nome,
        apelido,
        nascimento,
        sexo,
        email,
        whatsapp,
        password,
        thumbnail,
        cidade,
        uf,
      });
      console.log('usuario inserido: ' + user);
    } catch (error) {
      console.log('### Erro ao inserir usuario' + error);
    }
  }

  return (
    <div>
      <h1>Novo cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="personal-content">
            <span className="thumb-container">
              <label id="thumbnail">
                <input type="file" />
                <span className="svg">
                  <FiCamera size={24} color="#252525" />
                </span>
              </label>
            </span>
            <input
              placeholder="Seu nome Completo"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
            <input
              placeholder="Como quer ser chamado?"
              value={apelido}
              onChange={(e) => {
                setApelido(e.target.value);
              }}
            />
            <input
              id="nascimento"
              value={nascimento}
              onChange={(e) => {
                setNascimento(e.target.value);
              }}
              placeholder="Nascimento"
              alt="Data de nascimento com dd/mm/aaaa"
            />

            <span class="genero">
              <input
                type="radio"
                value="0"
                name="campo-radio"
                id="campo-radio1"
              />
              <label for="campo-radio1">Masculino</label>
              <input
                type="radio"
                value="0"
                name="campo-radio"
                id="campo-radio2"
              />
              <label for="campo-radio2">Feminino</label>
            </span>
          </div>
          <div className="contacts-content">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Seu melhor email"
            />
            <input
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
              placeholder="Seu whatsapp"
            />
            <span className="residence-content">
              <input
                id="cidade"
                value={cidade}
                onChange={(e) => {
                  setCidade(e.target.value);
                }}
                placeholder="Cidade onde mora"
              />
              <input
                value={uf}
                onChange={(e) => {
                  setUF(e.target.value);
                }}
                id="uf"
                placeholder="UF"
              />
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Senha"
            />
            <input
              type="password"
              value={passwordRetyped}
              onChange={(e) => {
                setPasswordRetyped(e.target.value);
              }}
              placeholder="Repita sua senha"
            />
          </div>
        </div>
        <span className="button" type="submit">
          <button id="cadastrar">Cadastrar</button>
        </span>
      </form>
      <div className="form-footer">
        <Link to="/">
          <FiArrowLeft size={12} color="#fff" />
          Voltar
        </Link>
      </div>
    </div>
  );
}
