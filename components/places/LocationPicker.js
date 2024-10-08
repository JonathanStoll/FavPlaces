import { useEffect, useState } from "react";
import { StyleSheet, View, Alert, Image, Text } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { colors } from "../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { getAdress, getMapPreview } from "../../util/location";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";

function LocationPicker({ onLocationSelected }) {
    const navigator = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();
    const [location, setLocation] = useState(null);
    const [locationPermissionInformation, requestPermition] = useForegroundPermissions();
    useEffect(() => {
        if (isFocused && route.params) {

            const mapPickerselected = { lat: route.params.pickedLat, log: route.params.pickedLong }
            setLocation(mapPickerselected);
        }

    }, [route, isFocused]);

    useEffect(() => {
        async function getLocation() {

            if (location) {
                const address = await getAdress(location.lat, location.log)
                onLocationSelected({ ...location, address: address })

            }
        }
        getLocation();

    }, [location, onLocationSelected]);
    async function veryfyPermition() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermition();
            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Permission Denied", "Please enable location permission in settings");
            return false;
        }
        return true;
    }
    async function getLocation() {
        const hasPermission = await veryfyPermition();
        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
        setLocation({
            lat: location.coords.latitude,
            log: location.coords.longitude,
        });

        console.log(location);
    }
    function pickOnMap() {
        navigator.navigate("Map");
        console.log("Pin");
    }

    let locationPreview = <Text>No location selected</Text>;
    if (location) {
        locationPreview = <Image source={{ uri: getMapPreview(location.lat, location.log) }} style={styles.image} />
    }
    return <View>
        <View style={styles.mapPreview}>
            {locationPreview}
        </View>
        <View style={styles.actionButtons}>
            <OutlineButton icon="location" onPress={getLocation}>Locate User</OutlineButton>
            <OutlineButton icon="map" onPress={pickOnMap}>Pick on map</OutlineButton>
        </View>
    </View>;
}
export default LocationPicker;
const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary100,
        borderRadius: 10,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
});