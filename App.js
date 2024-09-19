import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";
import IconButton from "./components/UI/IconButton";
import { colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary500,
            headerTintColor: colors.gray700,
            contentStyle: {backgroundColor: colors.gray700},
          },
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
               title: "Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => {
                    navigation.navigate("AddPlace");
                  }}
                />
            )
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace}
          options={({ navigation }) => ({
            title: "Add a new Place",
            headerLeft: ({ tintColor }) => (
              <IconButton
                icon="arrow-back"
                size={24}
                color={tintColor}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            )
          })}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
