import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import FamilyContext from "../../context/FamilyContext";
import styles from "./FamilyList.module.css";
import stylesBtn from "../Forms/Button.module.css";
import Error from "../helpers/Error";
import { ReactComponent as Editar } from "../../assets/lnr-pencil.svg";
import { ReactComponent as Excluir } from "../../assets/lnr-cross-circle.svg";
import { ReactComponent as Novo } from "../../assets/lnr-plus-circle.svg";

const FamilyList = () => {
  const { error, data, familyList } = useContext(FamilyContext);

  React.useEffect(() => {
    async function loadFamilies() {
      await familyList();
    }
    loadFamilies();
  }, []);

  if (data.lenght !== 0)
    return (
      <div>
        <span className={styles.button}>
          <NavLink className={stylesBtn.button} to="/conta/family/store">
            <span className={styles.button}>
              <p>Novo</p>
              <Novo />
            </span>
          </NavLink>
        </span>
        <Error error={error} />
        <table>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Responsável</th>
              <th style={{ width: "20%" }}>Contato</th>
              <th style={{ width: "20%" }}>Cidade</th>
              <th style={{ width: "20%" }}>UF</th>
              <th style={{ width: "10%", textAlign: "center" }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, responsavel, cidade, uf, whatsapp }) => (
              <tr key={id}>
                <td>{responsavel}</td>
                <td>{whatsapp}</td>
                <td>{cidade}</td>
                <td>{uf}</td>
                <td>
                  <nav className={styles.nav}>
                    <NavLink to="/conta/family/update">
                      <Editar />
                    </NavLink>
                    <NavLink to="/conta/family/remove">
                      <Excluir />
                    </NavLink>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  else return <div>Sem dados</div>;
};

export default FamilyList;
