import { Pressable, View, StyleSheet, Text, Image } from "react-native"
import { colors } from "../../constants/colors"

function PlaceItem({ place, onSelect }) {
    console.log(place);
    return <Pressable onPress={onSelect} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
        <Image style={styles.img} source={{ uri: place.imageUri }} />
        <View style={styles.info}>
            <Text   style={styles.title}>{place.title}</Text>
            <Text style={styles.address}>{place.address}</Text>
        </View>
    </Pressable>
}
export default PlaceItem

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "flex-start",
        borderRadius: 10,
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 1 },
        backgroundColor: colors.primary500,
        marginVertical: 10,
    },
    pressed: {
        opacity: 0.9
    },
    img: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        height: 100
    },
    info: { flex: 2, padding: 10 },
    title: {fontWeight:"bold",fontSize:20, color:colors.gray700},
    address: {fontSize:16, color:colors.gray500}
})