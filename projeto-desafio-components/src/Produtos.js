import React from 'react'
import './App.css';


const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = (props) => {
  console.log(props.nome);
  return (
  <div>
    <p>{props.nome} teste</p>
  </div>)
  // console.log(elementProduct, "aq to testando");
}

// ai eu pego produtos
// mando a props de nome
// e na outro elemento eu puxo produtos várias vezes

export default Produtos