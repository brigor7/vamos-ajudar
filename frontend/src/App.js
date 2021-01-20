import logo from './logo.svg';
import { FiUser, FiUserX, FiUserPlus, FiMail } from 'react-icons/fi';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo vem ajudar!" />
        <div className="content">
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
        </div>
      </div>
    </>
  );
}

export default App;
