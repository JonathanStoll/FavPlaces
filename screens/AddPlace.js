import PlaceForm from "../components/places/PlaceForm"
import { insertPlace } from "../util/database"

function AddPlace({navigation}){
    
  async  function createPlaceHandeler(place){
      await insertPlace(place);
        navigation.navigate("AllPlaces",{
           place: place
        })
    }
    return <PlaceForm onCreatePlace={createPlaceHandeler}/>
}
export default AddPlace