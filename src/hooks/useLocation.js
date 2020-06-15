import { useState, useEffect } from 'react';
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';
  
//user locationin trackingiin liittyvä business logiikka.



export default (isFocused, recording, callback) => {
    const [err, setErr] = useState(null);
    // console.log('****isFocused', isFocused, 'and recording:', recording);



    // Muista useEffect 3 kultaista sääntöä!
    useEffect(() => {
        let subscriber; //ei tarvitse lisätä dependencyihin koska localized (käytetään vain täs hookissa)
        const startWatching = async () => {
            try {
                await requestPermissionsAsync(); //pyydetään lupa
                const subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000, // joka sekunti 
                        distanceInterval: 10 // tai joka kymmenes metri
                    },
                    callback
                );
            } catch (e) {
                setErr(e);
            }
        };

        if (isFocused || recording) {
            startWatching()
            console.log('tämän tekstin pitää näkyy vain kun focused tai tracking.')
        } else {
            console.log('sammutus luuppi')
            //if varmistaa et ei yritetä sulkea jos null.
            if (subscriber) {
                subscriber.remove();
                }
                subscriber=null;
            }
        
        //tää poistaa vanhan subscriberin?
        return () =>{
            if (subscriber) {subscriber.remove()}
        }
            
    }, [isFocused, recording]); //ajetaan funktio aina jos isFocused tai recording muuttuu.

    return [err] //array koska yleinen käytäntö..

};