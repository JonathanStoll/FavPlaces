import { FlatList, View, StyleSheet, Text } from "react-native"
import PlaceItem from "./PlaceItem"
import { colors } from "../../constants/colors"
function PlacesList({places}){

    if(!places || places.length === 0){
        return<View style={styles.fallBackContainer}>
            <Text style={styles.fallBackText}>No places found</Text>
        </View>
    }
return  <FlatList
style={styles.list}
data={places}
keyExtractor={(item)=> item.id}
renderItem={({item})=><PlaceItem place={item}/>}
/>
}
export default PlacesList
const styles = StyleSheet.create({
    list:{
       margin:20
    },
    fallBackContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    fallBackText:{
        fontSize:16,
        color:colors.primary500
    }
})