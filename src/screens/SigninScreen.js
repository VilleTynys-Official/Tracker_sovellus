import React, {useContext} from 'react';
import {View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation'; //react komponentti, joka kuuntelee milloin tulee navigation event..

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context);
    console.log(clearErrorMessage)
    //navigation events suoriutuu aina kun sivulle navigoidaan. (tyhjentää errorMessagen AuthContextista)
    return(
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus ={clearErrorMessage}/>
            <AuthForm 
                headerText='Sign in to your Account'
                errorMessage= {state.errorMessage}
                submitButtonText= 'Sign In'
                onSubmit= {signin}    // sama kuin:   ({ email, password}) => signup({ email, password})
            />
            <NavLink
                text= "Don't have an account. Sign Up instead!"
                routeName= "Signup"
            />
        </View>
    )
};

//kumotaan navigationin perusasetus.
SigninScreen.navigationOptions = () => {
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


export default SigninScreen;