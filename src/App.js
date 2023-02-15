import { useState } from 'react';
import './App.css';
import { Lista } from './components/Lista';
import { Sistema } from './components/Sistema';
import { Titulo } from './components/Titulo';
import { Contagem } from './components/Contagem'



function App() {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState('');

  function onChangeCampo(ev){
    let item = ev.target.value;
    setItem(item);
  };

  function adicionarItem(){
    if(item === ''){
      return
    }
    setLista([...lista, item]); 
    setItem('');
  }

  function onClickBotao() {
    adicionarItem()
  };

  function onEnter(ev){
    if(ev.keyCode === 13){
      adicionarItem()
    }
  }

  return (
    <div className="App">
      <Titulo nomes={{nome1: 'Kallil', nome2: 'Celso', nome3: 'Nelis', nome4: 'Visitante'}}/>
      <Sistema sistema='Sistema lista de compras'/>
      <div className='campo'>
          <input value={item} type={'text'} className='texto' onChange={onChangeCampo} onKeyDown={onEnter}/>
          <input type={'submit'} className='botao' value={'Adicionar'} onClick={onClickBotao}/>
        </div>
        <Contagem tamanho={lista.length}/>
      <div className="main">
        <Lista items={lista}/>

      </div>
    </div>
  )};

export default App;
