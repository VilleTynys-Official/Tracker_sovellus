import '../_mockLocations'; //tää simuloi locationin muutokset.
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'; //..higher order komponent joka tuo isFocused propsin wrapattyyn komponenttiin.
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused }) => {  //isFocused saadaan higher order funktiosta.
    // console.log(isFocused);

    const { state, addLocation } = useContext(LocationContext);

    //kutsutaan useLocation locationilla. callback on addLocation. Jos se palauttaa [err] nii otetaan se vastaan.
    const [err] = useLocation(isFocused, (location) => {
        addLocation(location, state.recording); //tämä tehdään näin koska uselocationiin ei anneta Contextia..
    })

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />

            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({});

//'higher order function eli saa funktion sisäänsä'
export default withNavigationFocus(TrackCreateScreen);