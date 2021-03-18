import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import Table from "../Forms/Table";
import FamilyContext, { FamilyProvider } from "../../context/FamilyContext";
import Error from "../helpers/Error";

const Family = () => {
  const { error, loading, data, familyList } = useContext(FamilyContext);

  React.useEffect(() => {
    async function loadFamilies() {
      await familyList();
    }
    loadFamilies();
  }, []);

  const rota = "family";
  const head = ["Responsavel", "Contato", "Cidade"];
  const ndata = data.map(({ family_id, responsavel, cidade, uf, whatsapp }) => {
    return {
      id: family_id,
      col1: responsavel,
      col2: whatsapp,
      col3: cidade + " - " + uf,
    };
  });

  console.log("nova data:", ndata);

  if (error) return <Error error={error} />;

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Table data={ndata} head={head} rota={rota} />
      )}
    </div>
  );
};

export default Family;
