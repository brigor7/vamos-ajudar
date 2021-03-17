import React, { useState, createContext } from 'react'
import api from '../connection'

const FamilyContext = createContext()

export const FamilyProvider = ({ children }) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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
    } catch (error) {
      setError('Erro ao inserir familia. ' + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FamilyContext.Provider value={{ error, loading, familyCreate }}>
      {children}
    </FamilyContext.Provider>
  )
}

export default FamilyContext
