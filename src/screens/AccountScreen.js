import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <>
            <Text style={StyleSheet.create({ fontSize: 50})} >AccountScreen</Text>
            <Button title='Sign Out' onPress={signout}/>
        </>
    
        )
};


const styles = StyleSheet.create({});


export default AccountScreen;
