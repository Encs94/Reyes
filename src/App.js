import CardRey from './components/cards/CardRey';
import './App.css';
import { useState } from 'react';
import reyes from './api/mockData';


// Come pinga

function App() {

  const [msj, setmsj] = useState("Por defecto")

  const handleClick = () => {
    console.log("click en CardRey")
  }

  return (
    <div>
      <h1>{msj}</h1>
      <div className="plantilla">
        {
          reyes.map(rey => {
            return (
              <CardRey
                key={rey}
                nombre={rey.name}
                vacas={rey.vacas}
                img={rey.img}
                onClick={() => handleClick}
              />
            )
          })
        }
      
      </div>
    </div>
  );
}

export default App;
