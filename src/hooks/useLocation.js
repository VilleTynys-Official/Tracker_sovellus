import { useState, useEffect } from 'react';
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

//user locationin trackingiin liittyvä business logiikka.



export default (shouldTrack, callback) => { //shouldTrack on isFocused propsi.
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);



    const startWatching = async () => {
        try {
            await requestPermissionsAsync(); //pyydetään lupa
            const sub = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000, // joka sekunti
                    distanceInterval: 10 // tai joka kymmenes metri
                },
                callback
            );
            setSubscriber(sub);
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        if (shouldTrack) {
            startWatching()
        } else {
            console.log('sammutus luuppi')
            //ylim. luuppi joka varmistaa et ei ole null koska muuten kaatui.
            if (subscriber) {
                subscriber.remove(); //tähä pysähtyy..
                setSubscriber(null)
            }
        }
    }, [shouldTrack]); //ajetaan funktio aina jos shouldTrack muuttuu.

    return [err] //array koska yleinen käytäntö..

};