import { useState } from "react";
import { View, Button, Alert, Image, Text, StyleSheet } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";

function ImagePicker() {
    const [camaraPermitionInformation, requestPermition] = useCameraPermissions();
    const [image, setImage] = useState(null);
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
        setImage(image.assets[0]);
    }
    let imagePreview = <Text>No image selected</Text>;
    if (image) {
        imagePreview = <Image source={{ uri: image.uri }} style={styles.image} />;
    }
    return <View>

         <View style={styles.imagePreview}>
            {imagePreview}
        </View>
        <OutlineButton icon="camera" onPress={takeImageHaandeler}  >Take a Picture</OutlineButton>
    </View>
}
export default ImagePicker;
const styles = StyleSheet.create({
    imagePreview: {
      width: '100%',
      height: 200,
      marginVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary100,
      borderRadius: 10,
    },
    image:{
        width: '100%',
        height: '100%',
    }
});