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
            longitude: -122.0312186 + increment * tenMeterWithDegrees, //aloitetaan Apple HQ:sta ja liikutetaan sieltä eteenpäin
            latitude: 37.33233141 + increment * tenMeterWithDegrees
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 3000);