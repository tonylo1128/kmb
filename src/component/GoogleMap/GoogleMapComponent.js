import React, { useState } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
} from "react-google-maps";
import axios from "axios";

import { convertCoord } from "../convertCoord";
import "./googleMap.scss"

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCrTehUSyDH5v6y4RDP-4YetXvt4rfNFl4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `75%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `75%` }} />,
  }),
  withScriptjs,
  withGoogleMap
) ( ({path, zoomLevel, center}) => {
  

  return (
    
    <div className="google-map-container">

      <GoogleMap 
        defaultZoom={12}
        center={center}
        zoom={zoomLevel}


      >
        {path.length !== 0 &&
          path.map((item, index) => (
            <Polyline
              defaultOptions={{
                geodesic: true,
                strokeColor: "#D1241B",
                strokeOpacity: 1.0,
                strokeWeight: 3,
              }}
              key={index}
              path={item.map(([lat, lng]) => convertCoord({ lat, lng }))}
            />
          ))}
      </GoogleMap>
    </div>
  );
});

export default Map;
