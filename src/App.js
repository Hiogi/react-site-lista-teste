import './App.css';
import { Campo } from './components/Campo';
import { Lista } from './components/Lista';
import { Sistema } from './components/Sistema';
import { Titulo } from './components/Titulo';



function App() {
  return (
    <div className="App">
      <Titulo nomes={{nome1: 'Kallil', nome2: 'Celso', nome3: 'Nelis'}}/>
      <Sistema sistema= 'Sistema lista de compras'/>
      <Lista items={['Coca-cola', 'Biscoito', 'YoPro', 'Salgado']}/>
      <Campo/>
    </div>
  )};

export default App;
