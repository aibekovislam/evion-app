import React, { useEffect, useReducer, useState } from 'react';
import { View, StyleSheet,Text, Dimensions } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy, getCurrentPositionAsync } from 'expo-location';



const HomePage = () => {
  const [location , setLocation]= useState(null);
  const [errorMsg , setErrorMsg]= useState(null);

  useEffect( () => {
    (async() => {
      let {status}= await requestForegroundPermissionsAsync();
      if(status !=='granted')
      {
        setErrorMsg('Permission to access locatiob was denied');
        return;
      }
      let location= await getCurrentPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        maximumAge: 10000
      });
      setLocation(location);
    })();
  },[]);

  let text= 'Waiting...';
  if(errorMsg)
  {
    text(errorMsg)
  }
  else if(location) {
    text=JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView 
        showsMyLocationButton={true}
        showsUserLocation= {true}
        style={styles.map}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  
});


export default HomePage;
