import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { mapStyles } from '../styles/MapStyles';
import * as Location from 'expo-location'; 
import MapViewDirections from 'react-native-maps-directions';
import { styles } from '../styles/AuthorizationStyles';
import MenuSVG from '../static/MenuSVG';
import GeoSVG from '../static/GeoSVG';
import { GOOGLE_API_KEY } from '../utils/consts';
import TaxCarSVG from '../static/tax_car';

const MapScreen = ({ locations, selectedLocation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [heading, setHeading] = useState(0);
  const mapViewRef = useRef(null);
  const rotateInterpolate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const subscribeToLocationUpdates = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (newLocation) => {
          const { coords } = newLocation;
          setUserLocation(coords);
        }
      );
    };

    subscribeToLocationUpdates();
  }, []);

  useEffect(() => {
    const headingSubscription = Location.watchHeadingAsync((data) => {
      setHeading(data.magHeading);
    });
  
    return () => {
      if (headingSubscription) {
        headingSubscription.remove && headingSubscription.remove();
      }   
    }
  }, []);

  useEffect(() => {
    Animated.timing(rotateInterpolate, {
      toValue: heading,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [heading]);

  useEffect(() => {
    if (userLocation) {
      mapViewRef.current?.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [userLocation]);


  useEffect(() => {
    if (userLocation) {
      centerMapOnUserLocation();
    }
  }, [userLocation]);  
  
  // console.log(userLocation)

  const rotationStyle = {
    transform: [
      {
        rotate: rotateInterpolate.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <View style={mapStyles.container}>
      <View style={styles.menu}>
        <MenuSVG />
      </View>
      <View style={styles.geo_btn}>
        <TouchableOpacity onPress={() => {
        }}>
          <GeoSVG />
        </TouchableOpacity>
      </View>
      <MapView
        ref={mapViewRef}
        showsMyLocationButton={false}
        showsUserLocation={false}
        style={mapStyles.map}
        initialRegion={{
          latitude: userLocation ? userLocation.latitude : 37.78825,
          longitude: userLocation ? userLocation.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {userLocation ? (
          <Marker coordinate={userLocation}>
            <Animated.View style={rotationStyle}>
              <TaxCarSVG />
            </Animated.View>
          </Marker>
        ) : null}
        {locations?.map((location, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: location?.latitude, longitude: location?.longitude }}
            title={location.name}
            description={"Станция Evion"}
          />
        ))}
        {userLocation && selectedLocation && (
          <MapViewDirections
            origin={userLocation}
            destination={selectedLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            mode={'DRIVING'}
          />
        )}
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
