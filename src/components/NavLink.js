import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'; //helpottaa stylingiä..?
import Spacer from '../components/Spacer';
import {withNavigation} from 'react-navigation';
//täl tuodaan navigointi (voitaisiin myös tuoda propsina parentista).

const NavLink = ( { navigation, text, routeName }) =>{
    return(
        <TouchableOpacity onPress={() =>{ navigation.navigate(routeName)}}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
    }
})

export default withNavigation(NavLink); //nyt NavLink kutsutaan withNavigation kanssa (josta se saa navigationin propsina sisäänsä)

