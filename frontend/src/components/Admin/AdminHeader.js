import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

function Menu() {
  return (
    <div className="container">
      <div className="content">
        <a href="/main">
          <img src={logo} alt="logo vem ajudar" />
        </a>
        <ul className="itens">
          <li>
            <a href="/auxilio">Auxilio</a>
          </li>
          <li>
            <a href="/familia">Familia</a>
          </li>
          <li>
            <a href="/integrantes">Integrantes</a>
          </li>
          <li>
            <a href="/genero">Genero</a>
          </li>
          <li>
            <a href="/tipo">Tipo</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
