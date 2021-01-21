import React from 'react';
import { FiUserX, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Login</h1>
      <form action="">
        <input type="Email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
      <div className="form-footer">
        <Link to="/newUser">
          <FiUserPlus size={12} color="#fff" />
          Novo usuário
        </Link>
        <Link to="/check">
          <FiUserX size={12} color="#fff" /> Esqueci a senha
        </Link>
      </div>
    </>
  );
}

export default App;
