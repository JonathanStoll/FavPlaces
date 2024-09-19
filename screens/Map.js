import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";
function Map({ navigation }) {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    function selectLocation(event) {
        console.log(event.nativeEvent.coordinate);
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
        setSelectedLocation({ lat: lat, lng: lng });
    }
    const saveLocation = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert("Error", "Please select a location first");
            return
        }
        navigation.navigate('AddPlace', {
            pickedLat: selectedLocation.lat,
            pickedLong: selectedLocation.lng,
        });
    }, [selectedLocation, navigation]);
useLayoutEffect(() => {
   navigation.setOptions({
    headerRight: ({tintColor}) => (
     <Ionicons name="save" size={24} color={tintColor} onPress={saveLocation} />
    ),
   })
},[navigation, saveLocation])  

    return <MapView style={styles.map} initialRegion={region} onPress={selectLocation}>
        {selectedLocation && <Marker title="Picked Location" coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }} />}
    </MapView>
}
export default Map;
const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});