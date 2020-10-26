import '../scss/App.scss';
import React, {useCallback, useState} from "react";
import Controls from "../components/Controls";
import Results from "../components/Results";
import 'pure-css-loader/dist/css-loader.css';
import Alert from "../components/Alert";

function App() {
  const [mapWidth, setMapWidth] = useState(10);
  const [mapHeight, setMapHeight] = useState(10);
  const [mapAirportsCount, setMapAirportsCount] = useState(3);
  const [mapCloudsCount, setMapCloudsCount] = useState(4);
  const [currentDay, setCurrentDay] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [maps, setMaps] = useState(null);
  const [dayOfFirst, setDayOfFirst] = useState(0);
  const [dayForAll, setDayForAll] = useState(0);

  const simulate = useCallback(() => {
    setCurrentDay(0);
    setMaps(null);
    setLoading(true);
    fetch(`http://localhost:8000/map/generate?width=${mapWidth}&height=${mapHeight}&airportsCount=${mapAirportsCount}&cloudsCount=${mapCloudsCount}`)
        .then((res) => {
          if (!res.ok) throw res;
          return res.json();
        })
        .then((res) => {
          setMaps(res.maps);
          setDayOfFirst(+res.dayOfFirst);
          setDayForAll(+res.dayForAll);
        })
        .catch((err) => {
          if (typeof err.json === 'function'){
            err.json().then((err) => setError(err.errors.join('; ')));
          } else
            setError("Falha na requisição");
        })
        .finally(() => setLoading(false));
  }, [mapWidth, mapHeight, mapAirportsCount, mapCloudsCount]);

  return (
      <main>
        <Controls width={mapWidth} setWidth={setMapWidth} height={mapHeight} setHeight={setMapHeight}
                  airportsCount={mapAirportsCount} setAirportsCount={setMapAirportsCount} cloudsCount={mapCloudsCount}
                  setCloudsCount={setMapCloudsCount} onSimulate={simulate}/>

        {!!maps && (<Results maps={maps} currentDay={currentDay} setCurrentDay={setCurrentDay} dayOfFirst={dayOfFirst}
                             dayForAll={dayForAll}/>)}
        {loading && <div className="loader loader-default is-active"></div>}
        {error && <Alert>{error}</Alert>}
      </main>
  );
}

export default App;
