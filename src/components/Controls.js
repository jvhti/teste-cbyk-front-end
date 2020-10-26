import React from "react";
import MapControl from "./MapControl";

const Controls = React.memo(({width, setWidth, height, setHeight, airportsCount, setAirportsCount, cloudsCount, setCloudsCount, onSimulate}) => {
  return <React.Fragment>
    <MapControl value={width} min={10} setValue={setWidth}>Largura</MapControl>
    <span style={{marginRight: 5}}>x</span>
    <MapControl value={height} min={10} setValue={setHeight}>Altura</MapControl>
    <br/>
    <MapControl value={airportsCount} min={3} setValue={setAirportsCount}>Quantidade de Aeroportos</MapControl>
    <br/>
    <MapControl value={cloudsCount} min={4} setValue={setCloudsCount}>Quantidade de Nuvens</MapControl>
    <br/>
    <button onClick={onSimulate}>Simular</button>
  </React.Fragment>;
});

export default Controls;
