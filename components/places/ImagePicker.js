import { View, Button, Alert } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";

function ImagePicker() {
    const [camaraPermitionInformation, requestPermition] = useCameraPermissions();

    async function verifyPermissions() {
        if (camaraPermitionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermition();
            return permissionResponse.granted;
        }
        if (camaraPermitionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Permission Denied", "Please enable camera permission in settings");
            return false;
        }
        return true;
    }

        async function takeImageHaandeler() {
            const hasPermission = await verifyPermissions();
            if (!hasPermission) {
                return;
            }
            const image = await launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.5,
            });
            console.log(image);
        }
        return <View>
            <View>

            </View>
            <Button title="Pick Image" onPress={takeImageHaandeler} />
        </View>
    }
    export default ImagePicker;