import * as SQLite from 'expo-sqlite';

const database =  SQLite.openDatabaseAsync('places.db');

export function init() {
    const promise = new Promise((resolve, reject) => {

        return database.transactionAsync( async tx => {
         const result = await   tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageURI TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                log REAL NOT NULL
            )`,
                [],
                () => { 
                    resolve()
                },
                (_, error) => {
                   reject(error)
                });
                return result;
        });
    });
    return	promise;
}


export function insertPlace(place){
    const promise = new Promise((resolve, reject) => {
        return database.transactionAsync(async tx => {
        const result = await tx.executeSql(
                `INSERT INTO places (title, imageURI, address, lat, log) VALUES (?, ?, ?, ?, ?)`,
                [place.title, place.imageUri, place.address, place.location.lat, place.location.log],
                (_,result) => {
                    console.log(result);
                    resolve(result)
                },
                (_, error) => {
                    reject(error)
                });
                return result;
        });
    })
    return promise;
}