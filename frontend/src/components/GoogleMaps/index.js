import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import "./GoogleMap.css";

import mapStyles from "./mapStyles";

const GoogleMaps = ({ coords }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC5Ug1aGQdp6VDq_7Wv6UQPsSwwCVArWs0",
  });

  const containerStyle = {
    width: "1100px",
    height: "400px",
  };

  const center = {
    lat: coords.lat,
    lng: coords.lng,
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={options}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <Marker
        position={{
          lat: coords.lat,
          lng: coords.lng,
        }}
        icon={{
          url: "/f1icon.svg",
          scaledSize: new window.google.maps.Size(75, 75),
          origin: new window.google.maps.Point(0, 0),
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GoogleMaps);
