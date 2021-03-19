import React, { useState, createContext } from "react";
import api from "../connection";
import { useNavigate } from "react-router-dom";

const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function familyCreate(
    responsavel,
    endereco,
    bairro,
    cidade,
    uf,
    whatsapp
  ) {
    try {
      setError(null);
      setLoading(true);

      await api.post("family", {
        responsavel: responsavel,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        whatsapp: whatsapp,
      });
      navigate("/conta/family");
    } catch (error) {
      setError("Erro ao inserir familia. " + error);
    } finally {
      setLoading(false);
    }
  }

  async function familyUpdate(
    family_id,
    responsavel,
    endereco,
    bairro,
    cidade,
    uf,
    whatsapp
  ) {
    try {
      setError(null);
      setLoading(true);
      console.log(
        "Frontend: ",
        family_id,
        responsavel,
        endereco,
        bairro,
        cidade,
        uf,
        whatsapp
      );
      await api.put(
        "family",
        {
          responsavel: responsavel,
          endereco: endereco,
          bairro: bairro,
          cidade: cidade,
          uf: uf,
          whatsapp: whatsapp,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            family_id: family_id,
          },
        }
      );
      navigate("/conta/family");
    } catch (error) {
      setError("Erro ao atualizar familia. " + error);
    } finally {
      setLoading(false);
    }
  }

  async function familySearch(id) {
    try {
      setError(null);
      setLoading(true);
      const response = await api.get(`family/${id}`);
      setData(response.data);
    } catch (error) {
      setError("Erro ao buscar familia por parametro. " + error);
    } finally {
      setLoading(false);
    }
  }

  async function familyList() {
    try {
      setError(null);
      setLoading(true);
      const response = await api.get("family");
      setData(response.data);
    } catch (error) {
      setError("Erro ao listar familias. " + error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FamilyContext.Provider
      value={{
        error,
        loading,
        data,
        familyCreate,
        familySearch,
        familyUpdate,
        familyList,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
