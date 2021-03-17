import React, { useContext } from 'react'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../hooks/useForm'
import FamilyContext from '../../context/FamilyContext'
import style from './FamilyStore.module.css'
import Error from '../helpers/Error'

const FamilyStore = () => {
  const responsavel = useForm()
  const endereco = useForm()
  const bairro = useForm()
  const cidade = useForm()
  const uf = useForm()
  const whatsapp = useForm()

  const { familyCreate, error, loading } = useContext(FamilyContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await familyCreate(
      responsavel.value,
      endereco.value,
      bairro.value,
      cidade.value,
      uf.value,
      whatsapp.value,
    )
  }

  return (
    <section className="animeLeft container">
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          label="Responsavel"
          type="text"
          name="responsavel"
          required
          {...responsavel}
        />
        <Input label="Endereco" type="text" name="endereco" {...endereco} />
        <Input label="Bairro" type="text" name="bairro" {...bairro} />
        <div className={style.city}>
          <Input label="Cidade" type="text" name="cidade" {...cidade} />
          <Input
            className={style.uf}
            label="UF"
            type="text"
            name="uf"
            {...uf}
          />
        </div>
        <Input label="Whatsapp" type="text" name="whatsapp" {...whatsapp} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}

export default FamilyStore
