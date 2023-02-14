import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Lista } from './components/Lista';
import { Sistema } from './components/Sistema';
import { Titulo } from './components/Titulo';



function App() {
  const [lista, setLista] = useState(['oi',]);
  

  function addItem(proximoitem) {
    proximoitem = 'oi'
    setLista([...lista, proximoitem]) 
  }

  return (
    <div className="App">
      <Titulo nomes={{nome1: 'Kallil', nome2: 'Celso', nome3: 'Nelis', nome4: 'Visitante'}}/>
      <Sistema sistema='Sistema lista de compras'/>
      <div className="main">
        <Lista items={[lista]}/>

        <div className='campo'>
          <input type={'text'} className='texto'/>
          <input type={'submit'} className='botao' onClick={addItem}/>
        </div>
      </div>
      <Footer ano={2023} anoFundacao={1992}/>
    </div>
  )};

export default App;
