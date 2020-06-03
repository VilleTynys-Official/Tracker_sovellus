import '../_mockLocations'; //tää simuloi locationin muutokset.
import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Text} from 'react-native-elements';
import { SafeAreaView, withNavigationFocus} from 'react-navigation'; //..higher order komponent joka tuo isFocused propsin wrapattyyn komponenttiin.
import Map from '../components/Map';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
 
const TrackCreateScreen = ({ isFocused }) => {  //isFocused saadaan higher order funktiosta.
    const {addLocation} =useContext(LocationContext);
    const [err] = useLocation( isFocused, addLocation) //kutsutaan useLocationia. Jos error nii otetaan se vastaan (muuten location toteuttaa addLocationin)

    return (
        <SafeAreaView forceInset= {{top: 'always'}}>
            <Text h2>TrackCreateScreen</Text>
            <Map />

            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({});

//'higher order function eli saa funktion sisäänsä'
export default withNavigationFocus(TrackCreateScreen);