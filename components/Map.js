import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function Map({ route, navigation }) {
  // Destructure initLoc from route.params if it exists, otherwise set a default location
  const { initLoc } = route.params || { initLoc: { latitude: 37.78825, longitude: -122.4324 } };

  const [selectedLocation, setSelectedLocation] = useState(null);

  console.log(selectedLocation);

  function confirmHanlder() {
    navigation.navigate("Profile", { selectedLocation: selectedLocation});
  }

  return (
    <>
      <MapView
        style={styles.map}
        provider='google'
        initialRegion={{
          latitude: initLoc.latitude,
          longitude: initLoc.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => {
          // console.log(e.nativeEvent);
          setSelectedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
        }}
      >
        <Marker coordinate={selectedLocation} />
        <Button title="return to Profile" onPress={confirmHanlder} />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

});
