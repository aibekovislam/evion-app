import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { mapStyles } from '../styles/MapStyles';
import customMarkerImage from '../../assets/vdfdv2.png';
import { Accuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { styles } from '../styles/AuthorizationStyles';
import MenuSVG from '../static/MenuSVG';
import GeoSVG from '../static/GeoSVG';


const MapScreen = ({ locations, selectedLocation }) => {
  const [ userLocation, setUserLocation ] = useState(null);

  useEffect( () => {
    (async() => {
      let {status}= await requestForegroundPermissionsAsync();
      if(status !=='granted')
      {
        return {error: 'Permission to access locatiob was denied'};
      }
      let location= await getCurrentPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        maximumAge: 100
      });
      setUserLocation(location);
    })();
  },[]);
  
  console.log(userLocation)

  return (
    <View style={mapStyles.container}>
      <View style={styles.menu}>
        <MenuSVG/>
      </View>
      <View style={styles.menu}>
        <MenuSVG/>
      </View>
      <View style={styles.geo_btn}>
        <GeoSVG/>
      </View>
      <MapView
        showsMyLocationButton={false}
        showsUserLocation={false}
        style={mapStyles.map}
        mapPadding={{ top: 90, right: 20, bottom: 10, left: 20 }}
        initialRegion={{
          latitude: 42.8751511,
          longitude: 74.598045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        userLocationPriority={'high'}
        userLocationFastestInterval={100}
        showsCompass={false}
      >
        { userLocation ? (
          <Marker
            coordinate={userLocation?.coords}
            image={require("../pages/Таксишка.png")}
          />
        ) : (null) }
        {locations?.map((location, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: location?.latitude, longitude: location?.longitude }}
            title={location.name}
            description={"Станция Evion"}
            // image={customMarkerImage}
          />
        ))}
        <MapViewDirections
          origin={userLocation?.coords}
          destination={selectedLocation}
          apikey={"AIzaSyADp9Xd0Zj1Gwe8I7CY0WaUCau1Tfl76hY"}
          strokeWidth={5}
          mode={'DRIVING'}
        />
      </MapView>
        <View style={styles.countAllClients}>
          <Text style={styles.small_text}>Кол-во</Text>
          <Text style={styles.count_cli}>100</Text>
          <Text style={styles.small_text}>Пассажиров</Text>
        </View>
    </View>
  );
};

export default MapScreen;
