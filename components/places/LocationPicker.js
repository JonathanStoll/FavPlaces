import { StyleSheet, View, Alert } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { colors } from "../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
function LocationPicker() {
const [locationPermissionInformation, requestPermition] = useForegroundPermissions();
async function veryfyPermition() {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermition();
        return permissionResponse.granted;
    }
    if (camaraPermitionInformation.status === PermissionStatus.DENIED) {
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
     console.log(location);
    }
    function pickOnMap() {
        console.log("Pin");
    }
  return <View>
    <View style={styles.mapPreview}></View>
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
    actionButtons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    }
});