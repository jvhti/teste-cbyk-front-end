import React from "react";
import MapPreviewer from "./MapPreviewer";
import MapControl from "./MapControl";

const Results = React.memo((props) => {
  return <React.Fragment>
    <h2 style={{textAlign: 'center'}}>Dia: {props.currentDay === 0 ? "Inicial" : props.currentDay}</h2>
    <MapPreviewer curMap={props.maps[props.currentDay]}/>

    <MapControl type="range" value={props.maps.length - 1 < props.currentDay ? 0 : props.currentDay} min="0"
                max={props.maps.length - 1}
                setValue={props.setCurrentDay}>Passos da Simulação</MapControl>

    <h2>Resultado:</h2>
    <h4>Dias até primeiro aeroporto ficar coberto: {props.dayOfFirst}</h4>
    <h4>Dias até todos os aeroportos ficarem cobertos: {props.dayForAll}</h4>
  </React.Fragment>;
});

export default Results;
