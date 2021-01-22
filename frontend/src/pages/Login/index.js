import React, { useState } from 'react';
import { FiUserX, FiUserPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../connection';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const user_id = await api.post('/session', { email, password });
      console.log(user_id.data);
      localStorage.setItem('user_id', JSON.stringify(user_id.data));
      history.push('/main');
    } catch (error) {
      setMensagemErro('Usuário ou senha inválidos!');
      console.log('Ocorreu um erro ao realizar o login ' + email);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <div class="alerta error">{mensagemErro}</div>
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
        <Link to="/check">
          <FiUserX size={12} color="#fff" /> Esqueci a senha
        </Link>
      </div>
    </>
  );
}

export default App;
