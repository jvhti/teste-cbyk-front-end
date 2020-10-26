import classes from "../scss/MapSizeInput.module.scss";
import React from "react";

export function MapControl(props) {
  return <label className={classes.Label}>
    {props.children}: <input className={classes.Input} onChange={(ev) => props.setValue(ev.target.value)}
                             type={props.type || "number"}
                             value={props.value} min={props.min} max={props.max}/>
  </label>;
}
