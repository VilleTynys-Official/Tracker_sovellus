import '../_mockLocations'; //tää simuloi locationin muutokset.
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Text} from 'react-native-elements';
import { SafeAreaView} from 'react-navigation';
import {
        requestPermissionsAsync,
        watchPositionAsync,
        Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext} from '../context/LocationContext';

 


const TrackCreateScreen = () => {
    const {addLocation} =useContext(LocationContext);
    const [err, setErr] =useState(null);


    const startWatching = async () =>{
        try{
            await requestPermissionsAsync(); //pyydetään lupa
            await watchPositionAsync({    
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, // joka sekunti
                distanceInterval: 10 // tai joka kymmenes metri
                },
                location => {  //expo-location librarystä location.
                addLocation(location);   
                });

        }catch(e){
            setErr(e);
        }
    };

    useEffect(() =>{
        startWatching();
    }, []);



    return (
        <SafeAreaView forceInset= {{top: 'always'}}>
            <Text h2>TrackCreateScreen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({});


export default TrackCreateScreen;