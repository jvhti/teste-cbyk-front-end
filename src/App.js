import './App.css';
import React, {useState} from "react";
import MapPreviewer from "./containers/MapPreviewer";
import {MapControl} from "./components/MapControl";

function App() {
  const [mapWidth, setMapWidth] = useState(10);
  const [mapHeight, setMapHeight] = useState(10);
  const [mapAirportsCount, setMapAirportsCount] = useState(3);
  const [mapCloudsCount, setMapCloudsCount] = useState(4);
  const [currentDay, setCurrentDay] = useState(0);

  const [loading, setLoading] = useState(false);

  const [maps, setMaps] = useState(null);

  const result = !!maps ? (
      <React.Fragment>
        <MapPreviewer curMap={maps[currentDay]}/>

        Dia Atual: {currentDay}
        <MapControl type="range" value={currentDay} min="0" max="1"
                    setValue={setCurrentDay}>Dias</MapControl>

        <h4>Dias até primeiro aeroporto ficar coberto: 4</h4>
        <h4>Dias até todos os aeroportos ficarem cobertos: 7</h4>
      </React.Fragment>
  ) : null;

  return (
      <main>
        <MapControl value={mapWidth} min={10} setValue={setMapWidth}>Largura</MapControl>
        x
        <MapControl value={mapHeight} min={10} setValue={setMapHeight}>Altura</MapControl>
        <br/>
        <MapControl value={mapAirportsCount} min={3} setValue={setMapAirportsCount}>Quantidade de
          Aeroportos</MapControl>
        <br/>
        <MapControl value={mapCloudsCount} min={4} setValue={setMapCloudsCount}>Quantidade de Aeroportos</MapControl>
        <br/>
        <button>Simular</button>

        {result}
      </main>
  );
}

export default App;
