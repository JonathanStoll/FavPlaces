import PlaceForm from "../components/places/PlaceForm"

function AddPlace({navigation}){
    
    function createPlaceHandeler(place){
        navigation.navigate("AllPlaces",{
           place: place
        })
    }
    return <PlaceForm onCreatePlace={createPlaceHandeler}/>
}
export default AddPlace