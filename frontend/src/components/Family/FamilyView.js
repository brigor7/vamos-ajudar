import React, { useContext, useEffect, useState } from "react";
import FamilyContext from "../../context/FamilyContext";
import useForm from "../../hooks/useForm";
import style from "./FamilyStore.module.css";
import Input from "../Forms/Input";
import { useParams } from "react-router";
import Button from "../Forms/Button";
import Error from "../helpers/Error";

const FamilyView = () => {
  const responsavel = useForm();
  const endereco = useForm();
  const bairro = useForm();
  const cidade = useForm();
  const uf = useForm();
  const whatsapp = useForm();
  const { id } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  const { familySearch, familyUpdate, data, error, loading } = useContext(
    FamilyContext
  );

  useEffect(() => {
    async function loadFamily() {
      await familySearch(id);
    }
    if (data.length !== 0) {
      loadFamily();
      loadData();
    }
  }, [data, id]);

  const loadData = () => {
    responsavel.setValue(data[0].responsavel);
    endereco.setValue(data[0].endereco);
    bairro.setValue(data[0].bairro);
    cidade.setValue(data[0].cidade);
    uf.setValue(data[0].uf);
    whatsapp.setValue(data[0].whatsapp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDisabled) {
      setIsDisabled(!isDisabled);
    } else {
      await familyUpdate(
        id,
        responsavel.value,
        endereco.value,
        bairro.value,
        cidade.value,
        uf.value,
        whatsapp.value
      );
    }
  };

  return (
    <section className="animeLeft container">
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          label="Responsavel"
          type="text"
          name="responsavel"
          disabled={isDisabled}
          {...responsavel}
        />
        <Input
          label="Endereco"
          type="text"
          name="endereco"
          disabled={isDisabled}
          {...endereco}
        />
        <Input
          label="Bairro"
          type="text"
          name="bairro"
          disabled={isDisabled}
          {...bairro}
        />
        <div className={style.city}>
          <Input
            label="Cidade"
            type="text"
            name="cidade"
            disabled={isDisabled}
            {...cidade}
          />
          <Input
            className={style.uf}
            label="UF"
            type="text"
            name="uf"
            disabled={isDisabled}
            {...uf}
          />
        </div>
        <Input
          label="Whatsapp"
          type="text"
          name="whatsapp"
          disabled={isDisabled}
          {...whatsapp}
        />

        {isDisabled ? (
          <Button>Editar</Button>
        ) : loading ? (
          <Button>Atualizar</Button>
        ) : (
          <Button disabled>Atualizando...</Button>
        )}
      </form>
      {error && <Error error={error} />}
    </section>
  );
};

export default FamilyView;
