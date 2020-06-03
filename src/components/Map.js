import React, {useContext} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';



const Map = () => {
    const { state: {currentLocation} } = useContext(LocationContext);
    //console.log(currentLocation.coords);

    if(!currentLocation){
        return <ActivityIndicator size= 'large' style={{ marginTop: 200 }}/> //näyttää spinnerin kun ei sijaintia..
    }

    return <MapView
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
            </MapView>
             

}

const style= StyleSheet.create({
    map: {
        height: 300
    }

});

export default Map;