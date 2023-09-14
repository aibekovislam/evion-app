import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import io from 'socket.io-client';

const socket = io('ws://https://eviona-pp-25e208506c12.herokuapp.com/');

const HomePage = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords);

        // Отправляем местоположение на сервер как объект
        socket.emit('locationUpdate', {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        Location.watchPositionAsync(
          { accuracy: Location.Accuracy.High, timeInterval: 1000 },
          (newLocation) => {
            setUserLocation(newLocation.coords);
            console.log(newLocation)
            // Отправляем обновленное местоположение на сервер
            socket.emit('locationUpdate', {
              latitude: newLocation.coords.latitude,
              longitude: newLocation.coords.longitude,
            });
          }
        );
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 42.8751511,
          longitude: 74.598045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
            description="Your Current Location"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default HomePage;
