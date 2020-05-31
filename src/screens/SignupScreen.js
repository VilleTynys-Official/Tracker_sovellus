import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import {Text} from 'react-native-elements'; //helpottaa stylingiä..?
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {

    const {state, signup} = useContext(AuthContext);

    // console.log(state);

    return(
        <View style={styles.container}>
            <AuthForm 
                headerText='Sign Up for Tracker'
                errorMessage= {state.errorMessage}
                submitButtonText= 'Sign Up'
                onSubmit= {signup}    // sama kuin:   ({ email, password}) => signup({ email, password})
            />
         
            <TouchableOpacity onPress={() =>{ navigation.navigate('Signin')}}>
                <Spacer>
                    <Text style={styles.link}>Already have an account. Sign in instead.</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
};
    //kumotaan navigationin perusasetus.
    SignupScreen.navigationOptions = () => {
        return {
            headerShown: false
        };
    };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    link: {
        color: 'blue',
    }
        
    
});


export default SignupScreen;