import {useState, useEffect} from 'react';
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

//user locationin trackingiin liittyvä business logiikka

export default (callback) => {
    const [err, setErr] =useState(null);


    const startWatching = async () =>{
        try{
            await requestPermissionsAsync(); //pyydetään lupa
            await watchPositionAsync({    
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, // joka sekunti
                distanceInterval: 10 // tai joka kymmenes metri
                },
                callback
                );

        }catch(e){
            setErr(e);
        }
    };

    useEffect(() =>{
        startWatching();
    }, []);

    return [err] //array koska yleinen käytäntö..

};