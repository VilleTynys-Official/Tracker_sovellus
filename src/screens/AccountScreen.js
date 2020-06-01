import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={StyleSheet.create({ fontSize: 50})} >AccountScreen</Text>
            <Button title='Sign Out' onPress={signout}/>
        </SafeAreaView>
    
        )
};


const styles = StyleSheet.create({});


export default AccountScreen;
