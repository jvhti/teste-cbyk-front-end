import React from 'react';

const Alert = (props) => {
  return <p>Ocorreu um erro! Erro: {props.children}</p>
};

export default Alert;
