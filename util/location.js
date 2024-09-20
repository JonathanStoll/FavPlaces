import { GOOGLE_API_KEY } from '../constants/variabels';
export function getMapPreview(lat,log){
const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${log}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${log}&key=${GOOGLE_API_KEY}`
return imagePreviewUrl
}

export async function getAdress(lat,log){
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${log}&key=${GOOGLE_API_KEY}`);
    if(!response.ok){
        throw new Error('Failed to fetch address');
    }
    const data = await response.json();
    return data.results[0].formatted_address;
}