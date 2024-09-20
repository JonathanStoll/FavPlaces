import { useCallback, useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import OutlineButton from "../UI/OutlineButton";
function PlaceForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  function handleTitleChange(text) {
    setTitle(text);
  }
  function handleImageChange(image) {
    setImage(image);
  }
  const handleLocationChange =useCallback((location) => {
    setLocation(location);
  }, []);
  function handleSubmit() {
    console.log("Submitted");
    console.log('title', title);
    console.log('image', image);
    console.log('location', location);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTitleChange}
          value={title}
        />
      </View>
      <ImagePicker onImageSelected={handleImageChange} />
      <LocationPicker onLocationSelected={handleLocationChange} />
      <OutlineButton onPress={handleSubmit}>Add Place!</OutlineButton>
    </ScrollView>
  );
}
export default PlaceForm;

const styles = {
  form: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.primary500,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    borderBottomColor: colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: colors.primary100,
  },
};
