import { useState } from "react"
import { View, Text, ScrollView, TextInput } from "react-native"

function PlaceForm(){

    const [title, setTitle] = useState("")
    function handleTitleChange(text){
        setTitle(text)
    }
    return<ScrollView>
        <View>
            <Text>Title</Text>
            <TextInput onChangeText={handleTitleChange} value={title} />
        </View>
    </ScrollView>
}
export default PlaceForm