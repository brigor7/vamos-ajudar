import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Table.module.css";
import stylesBtn from "./Button.module.css";
import Error from "../helpers/Error";
import { ReactComponent as Editar } from "../../assets/lnr-pencil.svg";
import { ReactComponent as Excluir } from "../../assets/lnr-cross-circle.svg";
import { ReactComponent as Novo } from "../../assets/lnr-plus-circle.svg";

const Table = ({ head, data, rota }) => {
  return (
    <div>
      <span className={styles.button}>
        <NavLink className={stylesBtn.button} to={`/conta/${rota}/store`}>
          <span className={styles.button}>
            <p>Novo</p>
            <Novo />
          </span>
        </NavLink>
      </span>
      <table>
        <thead>
          <tr>
            {head.map((title) => (
              <th style={{ width: `${90 / head.length}%` }}>{title}</th>
            ))}
            <th style={{ width: "10%", textAlign: "left" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, col1, col2, col3 }) => (
            <tr key={id}>
              <td>{col1}</td>
              <td>{col2}</td>
              <td>{col3}</td>
              <td>
                <nav className={styles.nav}>
                  <NavLink to={`/conta/${rota}/update`}>
                    <Editar />
                  </NavLink>
                  <NavLink to={`/conta/${rota}/remove`}>
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
};

export default Table;
