import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";


export default function LocationManager() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [location, setLocation] = useState();


    const locationHandler = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
    };

    return (
        <View>
            <Button title="show location" onPress={locationHandler}/>
            {location && (
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker coordinate={location} draggable={true}/>
                    </MapView>
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        width: 300,
        height: 200,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})