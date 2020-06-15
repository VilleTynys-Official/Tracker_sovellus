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
        let subscriber; //ei tarvitse lisätä dependencyihin (stateen) koska localized (käytetään vain täs hookissa)
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
                // console.log('****** Subscriberin tila (joka palautui TrackCreateScreenin callback funktioon) on:', subscriber)
            } catch (e) {
                setErr(e);
            }
        };

        if (isFocused || recording) {
            startWatching()
            console.log('tämän tekstin pitää näkyy vain kun focused tai tracking.')
        } else {
            console.log('sammutus luuppi')
            //ylim. luuppi joka varmistaa et ei ole null koska muuten kaatui.
            if (subscriber) {
                subscriber.remove(); //tähä pysähtyy..
                }
                subscriber=null;
            }
            
    }, [isFocused, recording]); //ajetaan funktio aina jos isFocused tai recording muuttuu.

    return [err] //array koska yleinen käytäntö..

};