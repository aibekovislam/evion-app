import React, { useEffect, useState } from 'react';
import MapScreen from '../components/MapScreen';
import { View, StyleSheet, Text } from 'react-native';
import NavigateCard from '../components/NavigateCard';
import { useLocation } from '../contexts/LocationContext';

const HomePage = () => {
  const { getLocations, locations } = useLocation();
  const [ selectedLocation, setSelectedLocation ] = useState(null);

  useEffect(() => {
    getLocations();
  }, [])

  return (
    <View style={styles.container}>
      <MapScreen locations={locations?.locations} selectedLocation={selectedLocation} />
      <NavigateCard locations={locations?.locations} setSelectedLocation={setSelectedLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
