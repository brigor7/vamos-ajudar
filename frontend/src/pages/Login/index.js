import React from 'react';
import { FiUserX, FiUserPlus } from 'react-icons/fi';

function App() {
  return (
    <>
      <h1>Login</h1>
      <form action="">
        <input placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
      <div className="form-footer">
        <a href="#">
          <FiUserPlus size={12} color="#fff" />
          Novo usuário
        </a>
        <a href="#">
          <FiUserX size={12} color="#fff" /> Esqueci a senha
        </a>
      </div>
    </>
  );
}

export default App;
