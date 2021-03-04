import React, { useState } from 'react';
import { FiUserX, FiUserPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../connection';
import logo from '../../assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const user_id = await api.post('/session', { email, password });
      console.log(user_id.data);
      localStorage.setItem('user_id', JSON.stringify(user_id.data));
      navigate('/main');
    } catch (error) {
      error === 'Error: Network Error'
        ? setMensagemErro('servidor não conectado: ' + error)
        : setMensagemErro('usuário ou senha inválidos: ' + error);
      //console.log('Ocorreu um erro ao realizar o login ' + email);
    }
  }

  return (
    <div className="container">
      <img className="img-logo" src={logo} alt="Logo vamos ajudar" />
      <h1>Login</h1>
      <div className="alerta error">{mensagemErro}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </form>
      <div className="form-footer">
        <Link to="/newUser">
          <FiUserPlus size={12} color="#fff" />
          Novo usuário
        </Link>
        <Link to="/forgetPassword">
          <FiUserX size={12} color="#fff" /> Esqueci a senha
        </Link>
      </div>
    </div>
  );
}

export default App;
