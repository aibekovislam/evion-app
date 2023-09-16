import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, Accuracy, getCurrentPositionAsync } from 'expo-location';
import { mapStyles } from '../styles/MapStyles';

const MapScreen = () => {
  const [location , setLocation]= useState(null);

  useEffect( () => {
    (async() => {
      let {status}= await requestForegroundPermissionsAsync();
      if(status !=='granted')
      {
        return {error: 'Permission to access locatiob was denied'};
      }
      let location= await getCurrentPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        maximumAge: 10000
      });
      setLocation(location);
    })();
  },[]);

  return (
    <View style={mapStyles.container}>
      <MapView 
        showsMyLocationButton={true}
        showsUserLocation= {true}
        style={mapStyles.map}
        mapPadding={{top: 690, right: 20, bottom: 10, left: 20}}
        initialRegion={{
          latitude: 42.8751511,
          longitude: 74.598045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
      </MapView>
    </View>
  );
};

export default MapScreen;
