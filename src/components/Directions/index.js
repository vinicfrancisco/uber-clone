import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

export default function Directions(props) {
  const {destination, origin, onReady} = props;

  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyBeNhM4-R46K6BJOfNDrZIf2EvipBbfMG0"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
