
import './App.css';

import {useState} from "react"

function App() {

  const [numero, setNumero] = useState(0);

  const Contador = () =>{
    setNumero(numero + 1);
  }

  const reset = () =>{
    setNumero(0);
  }

  return (
    
    <div className="Contenedor">
      
        <div className="Contador_Btn">
          <div className="Contador">
          <h1>Contador de Clicks</h1>
            <h1 className="Numero">{numero}</h1>
          </div>
          
          <div className="Btn">
            <button onClick={Contador}>Click</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>

        
    </div>
  );
}

export default App;
