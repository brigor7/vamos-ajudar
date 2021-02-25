import React, { useState, useRef } from 'react';

const useForm = ({ type }) => {
  const [value, setValue] = useState('');
  const [erro, setErro] = useState('');
  const inputRef = useRef();

  const types = {
    email: {
      regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'Preencha um e-mail válido!',
    },
    password: {
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message:
        'A senha precisa ter: Mínimo de 8 caracteres e composta por letras minuscula/maiscula e número.',
    },
  };

  const validate = (value) => {
    if (type === false) return true;

    if (value.length === 0) {
      setErro('Campo não foi preenchido!');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (erro) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    erro,
    validate: () => validate(value),
    onBlur: () => validate(value),
    inputRef,
  };
};

export default useForm;
