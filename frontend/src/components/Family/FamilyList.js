import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FamilyContext from '../../context/FamilyContext'
import styles from './FamilyList.module.css'
import stylesBtn from '../Forms/Button.module.css'

const FamilyList = () => {
  const { error, data, loading, familyList } = useContext(FamilyContext)

  useEffect(() => {
    async function loadFamilies() {
      await familyList()
    }
    loadFamilies()
    console.log('em useEffect', data)
  }, [])

  const handleClickEditar = (e) => {
    e.preventDefault()
  }

  const handleClickExcluir = (e) => {
    e.preventDefault()
    familyList()
  }

  if (data.lenght !== 0)
    return (
      <div>
        <span className={styles.button}>
          <Link className={stylesBtn.button} to="/conta/familia/store">
            Novo
          </Link>
        </span>
        <table>
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Responsável</th>
              <th style={{ width: '20%' }}>Contato</th>
              <th style={{ width: '20%' }}>Cidade</th>
              <th style={{ width: '10%' }}>UF</th>
              <th style={{ width: '20%' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, responsavel, cidade, uf, whatsapp }) => (
              <tr key={id}>
                <td>{responsavel}</td>
                <td>{cidade}</td>
                <td>{whatsapp}</td>
                <td>{uf}</td>
                <td>Editar | Excluir</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  else return <div>Sem dados</div>
}

export default FamilyList
