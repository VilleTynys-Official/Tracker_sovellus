import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Context} from '../context/AuthContext';

const SigninScreen = () => {
    const  {state, signin} = useContext(Context)

    return (
        <Text style={StyleSheet.create({ fontSize: 50})} >SigninScreen</Text>
    )
};


const styles = StyleSheet.create({});


export default SigninScreen;