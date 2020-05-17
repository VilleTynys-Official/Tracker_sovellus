import React from 'react';
import {View, StyleSheet, } from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    return(
        <>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>

            <Input label= 'Email'
                    placeholder='asdf'></Input>

            <Spacer />
                <Input label= 'Password'
                        placeholder='asdf'></Input>
            <Spacer>
                <Button title="Sign Up"></Button>
            </Spacer>
        </>
    )
    };


const styles = StyleSheet.create({
    

});


export default SignupScreen;