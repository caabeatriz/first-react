import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Produtos from './Produtos';
import CriandoProdutos from './CriandoProdutos';
import './App.css';


// const Titulo = (props) => {
//   return <h1> {props.texto} </h1>
// }
const App = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent:'space-between', width: '10%'}}>
      <Header texto="Home" />
      <Header texto="Produtos" />
      </div>
      {/* <Produtos  /> */}
      <CriandoProdutos />
      <Footer/>
    </div>
  )
}

export default App;
