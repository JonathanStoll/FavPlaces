export class Place {
    constructor(title, imageUri, location){
        this.title =title;
        this.imageUri =  imageUri.uri;
        this.address = location.address;
        this.location = {lat: location.lat, log: location.log}
        this.id = new Date()+Math.random()
    }
}