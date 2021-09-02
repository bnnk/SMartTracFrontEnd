import React from "react";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

import { RMap, ROSM } from "rlayers";

export default function Map({ lat, long }) {
  const center = fromLonLat([long, lat]);
  return (
    <RMap width={"100%"} height={"60vh"} initial={{ center: center, zoom: 11 }}>
      <ROSM />
    </RMap>
  );
}
