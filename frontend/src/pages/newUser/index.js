import React from 'react';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './style.css';

export default function NewUser() {
  return (
    <div>
      <h1>Novo cadastro</h1>
      <form action="">
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
            <input placeholder="Seu nome Completo" />
            <input placeholder="Como quer ser chamado?" />
            <input
              id="nascimento"
              placeholder="Data de nascimento com dd/mm/aaaa"
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
            <input type="email" placeholder="Seu melhor email" />
            <input placeholder="Seu whatsapp" />
            <span className="residence-content">
              <input id="cidade" placeholder="Cidade onde mora" />
              <input id="uf" placeholder="UF" />
            </span>
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Repita sua senha" />
          </div>
        </div>
        <span className="button">
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
