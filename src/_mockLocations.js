import * as Location from 'expo-location'; //tähti tuo kaikki funktiot mukana..

//tää scripti feikkaa et käyttäjä liikkuisi.

const tenMeterWithDegrees = 0.0001;

const getLocation = increment => { 
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 22.286976 + increment * tenMeterWithDegrees, //kandee plugaa tähä osoite jossa devailet nii kartta ei hypi liikaa.
            latitude: 60.462666 + increment * tenMeterWithDegrees
        }
    };
};


60.462666, 22.286976

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 3000);