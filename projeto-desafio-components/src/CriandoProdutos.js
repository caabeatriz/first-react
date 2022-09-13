import React from 'react'
import Produtos from './Produtos';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function CriandoProdutos() {
  return (
    <div className='produtos-main'> 
    <p style={{color:'green', fontSize: '2rem'}}>Produtos</p>{
     produtos.map((element) => {
      return (<div className='produtos'>  <p className='produtos-nome'>  {element.nome} </p> <ul>  {element.propriedades.map((element) => <li> {element} </li>)} </ul></div> ) 
     }) 

      }
      </div>
  )
}

export default CriandoProdutos