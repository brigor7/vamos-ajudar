import React, { useContext } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import useForm from '../../hooks/useForm'
import Error from '../helpers/Error'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const email = useForm('email')
  const password = useForm('password')

  const { userLogin, error, loading } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email.validate()) {
      userLogin(email.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="style.form" onSubmit={handleSubmit}>
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...password} />
        {error && <p className="error">{error}</p>}

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueci a senha
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
