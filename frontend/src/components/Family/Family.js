import React, { useContext } from "react";
import Table from "../Forms/Table";
import FamilyContext from "../../context/FamilyContext";
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
  const newData = data.map(
    ({ family_id, responsavel, cidade, uf, whatsapp }) => {
      return {
        id: family_id,
        col1: responsavel,
        col2: whatsapp,
        col3: cidade + " - " + uf,
      };
    }
  );

  if (error) return <Error error={error} />;

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Table data={newData} head={head} rota={rota} />
      )}
    </div>
  );
};

export default Family;
