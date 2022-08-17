import logo from './logo.svg';
import './App.css';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  function somarGastos(compras){
    let result = 0;
    compras.forEach(element => {
      let strg = Number(element.preco.match(/(\d+)/)[0]);
      result = result + strg
     
    });
    return result;
  }

  function ativaParagrafo(){
    if(somarGastos(dados.compras) > 10000){
      return true;
    }
  }
  somarGastos(dados.compras)
  return <div>
    <p> Nome: {dados.cliente}</p>
    <p> Idade: {dados.idade}</p>
    <p> Situação: <label className= { dados.ativa ? 'ativa' : 'desativado'}>{dados.ativa ? 'ativa' : 'desativado'} </label></p>
    <p> Total gasto: {somarGastos(dados.compras)}</p>
    <p className={ativaParagrafo() ? 'enable' : 'disabled'}> O total excede o limite </p>
  </div>;
};

export default App;
