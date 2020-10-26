import classes from "../scss/Input.module.scss";
import React from "react";

const MapControl = (props) => {
  return <label className={classes.Label}>
    {props.children}: <input className={classes.Input} onChange={(ev) => props.setValue(+ev.target.value)}
                             type={props.type || "number"}
                             value={props.value} min={props.min} max={props.max}/>
  </label>;
}

export default React.memo(MapControl);
