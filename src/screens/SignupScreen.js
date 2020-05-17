import React from 'react';
import {View, StyleSheet, } from 'react-native';
import {Text, Input, Button} from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
    return(
        <>
            <Text h3>Sign Up for Tracker</Text>
            <Input label= 'Email'
                    placeholder='asdf'></Input>
            <Input label= 'Password'
                    placeholder='asdf'></Input>
            <Button title="Sign Up"></Button>
            
        </>
    )
    };


const styles = StyleSheet.create({
    

});


export default SignupScreen;