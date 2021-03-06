import React, {useContext, useState} from 'react';
import {Text, Button, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle } from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';



const Map = () => {
    const { state: {currentLocation, locations} } = useContext(LocationContext);
    //console.log(currentLocation.coords);

    //jos ei sijaintia, näyttää latausindikaattorin
    if(!currentLocation){
        return <ActivityIndicator size= 'large' style={{ marginTop: 200 }}/> //näyttää spinnerin kun ei sijaintia..
    }

    // console.log(locations)


    return (
    <>
        <MapView
                style={style.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01, //Deltas are for "zooming"
                    longitudeDelta: 0.01
                }}

                region={{ //keskittää kartan aina kun päivittyy.
                    ...currentLocation.coords,          
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01 }}

            >
                <Circle
                    center={currentLocation.coords}
                    radius={100}
                    strokeColor="rgba(158,158,255, 1.0)"
                    fillColor="rgba(158,158,255, 0.3)"
                />
                <Polyline coordinates={locations.map(loc => loc.coords)}/>
            </MapView>
        
        </>)

}

const style= StyleSheet.create({
    map: {
        height: 300
    }

});

export default Map;