import React, {useState, useEffect, useCallback, useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import Search from '../Search';
import Directions from '../Directions';
import Details from '../Details';

import {getPixelSize} from '../../utils';
import markerImage from '../../assets/marker.png';
import backImage from '../../assets/back.png';

import {
  Container,
  StyledMap,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
  Back,
  BackImage,
} from './styles';

Geocoder.init('AIzaSyBeNhM4-R46K6BJOfNDrZIf2EvipBbfMG0');

export default function Map() {
  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);
  const [duration, setDuration] = useState(null);
  const [location, setLocation] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(async ({coords: {latitude, longitude}}) => {
      const response = await Geocoder.from({latitude, longitude});

      const address = response.results[0].formatted_address;
      const formattedAddress = address.substring(0, address.indexOf(','));

      setLocation(formattedAddress);
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      });
    });
  }, []);

  const handleLocationSelected = useCallback((data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    });
  }, []);

  const handleDirection = useCallback(result => {
    setDuration(Math.floor(result.duration));

    mapRef.current.fitToCoordinates(result.coordinates, {
      edgePadding: {
        bottom: getPixelSize(350),
        left: getPixelSize(50),
        right: getPixelSize(50),
        top: getPixelSize(50),
      },
    });
  }, []);

  const handleBack = useCallback(() => {
    setDestination(null);
  }, []);

  return (
    <Container>
      <StyledMap
        showsUserLocation
        loadingEnabled
        ref={mapRef}
        initialRegion={region}>
        {destination && (
          <>
            <Directions
              origin={region}
              destination={destination}
              onReady={result => handleDirection(result)}
            />

            <Marker coordinate={region} anchor={{x: 0, y: 0}}>
              <LocationBox>
                <LocationTimeBox>
                  <LocationTimeText>{duration}</LocationTimeText>

                  <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                </LocationTimeBox>

                <LocationText>{location}</LocationText>
              </LocationBox>
            </Marker>
            <Marker
              coordinate={destination}
              anchor={{x: 0, y: 0}}
              image={markerImage}>
              <LocationBox>
                <LocationText>{destination.title}</LocationText>
              </LocationBox>
            </Marker>
          </>
        )}
      </StyledMap>

      {destination ? (
        <>
          <Back onPress={() => handleBack()}>
            <BackImage source={backImage} />
          </Back>
          <Details />
        </>
      ) : (
        <Search onLocationSelected={handleLocationSelected} />
      )}
    </Container>
  );
}
