import React, { useState, createContext } from 'react'
import api from '../connection'
import { useNavigate } from 'react-router-dom'

const FamilyContext = createContext()

export const FamilyProvider = ({ children }) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(false)
  const navigate = useNavigate()

  async function familyCreate(
    responsavel,
    endereco,
    bairro,
    cidade,
    uf,
    whatsapp,
  ) {
    try {
      setError(null)
      setLoading(true)

      await api.post('family', {
        responsavel: responsavel,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        whatsapp: whatsapp,
      })
      navigate('/conta/familia')
    } catch (error) {
      setError('Erro ao inserir familia. ' + error)
    } finally {
      setLoading(false)
    }
  }

  async function familyList() {
    try {
      setError(null)
      setLoading(true)
      const response = await api.get('family')
      setData(response.data)
      console.log('lista de familias 2', data)
    } catch (error) {
      setError('Erro ao listar familias. ' + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FamilyContext.Provider
      value={{ error, loading, familyCreate, familyList, data }}
    >
      {children}
    </FamilyContext.Provider>
  )
}

export default FamilyContext
