import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';


const HomePage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [userHeading, setUserHeading] = useState(0)
  useEffect(() => {( async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Permission to access location was denied')
    } else {
      const locationSubscription = await watchPositionAsync({
            accuracy: Accuracy.Highest,
            timeInterval: 5000,
            distanceInterval: 1,
      }, (location) => {
        setUserLocation(location)
        console.log('New location update: ' + location.coords.latitude + ', ' + location.coords.longitude)
      })
    } return () => locationSubscription.remove()
  })()}, [])

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
          <Circle
            center={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
            radius={10}
            strokeColor="rgba(0, 0, 255, 0.2)"
            fillColor="rgba(0, 0, 255, 0.5)"
            strokeWidth={1}
          >
            <View style={styles.userHeading}>
              <View style={{ transform: [{ rotate: `${userHeading}deg` }] }}>
                <Text style={{ color: 'blue', fontSize: 18 }}>↑</Text>
              </View>
            </View>
          </Circle>
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
  userHeading: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
