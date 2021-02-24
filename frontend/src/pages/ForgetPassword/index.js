import React, { useState } from 'react';
import { FiUserX, FiUserPlus } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../connection';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [emailRedigitado, setEmailRedigitado] = useState('');
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
      error === 'Error: Network Error'
        ? setMensagemErro('servidor não conectado: ' + error)
        : setMensagemErro('usuário ou senha inválidos: ' + error);
      //console.log('Ocorreu um erro ao realizar o login ' + email);
    }
  }

  return (
    <>
      <h1>Esqueci a senha</h1>
      <div className="alerta error">{mensagemErro}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Digite o Email"
        />
        <input
          type="Email"
          value={emailRedigitado}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Redigite o email"
        />

        <button type="submit">Mudar senha</button>
      </form>
    </>
  );
}

export default ForgetPassword;
