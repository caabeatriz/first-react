import logo from './logo.svg';
import './App.css';

const titulo = <h1> Testandoaqui</h1>
function App() {
  const objeto = {
    nome:  'Carol'
  }
  const ativo = false;
  return (
    <>
    {titulo}
   <p className= {ativo ? 'azul' : 'amarelo'}> { objeto.nome} </p>
   </>
  );
}

export default App;
