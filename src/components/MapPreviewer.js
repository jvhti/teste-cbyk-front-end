import classes from "../scss/MapPreviewer.module.scss";
import React from "react";


const MapPreviewer = React.memo(({curMap}) => {
  const rows = curMap.map((row, index) =>
      <tr key={index}>
        {row.reduce((ac, cur, i) => {
          ac.push(<td key={i}>{cur}</td>);
          return ac;
        }, [])}
      </tr>);

  return <table className={classes.MapPreview}>
    <tbody>
    {rows}
    </tbody>
  </table>;
});

export default MapPreviewer;
