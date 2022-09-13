import React from 'react'

const createProdutos = (produtos) => {
  const elementProduct =  produtos.map(element => {
    
    return element.nome
  });
  console.log(elementProduct, "aq to testando");
 return <p> {}</p>
}

function Produto() {
  return (
    <div>Produto</div>
  )
}

export default Produto