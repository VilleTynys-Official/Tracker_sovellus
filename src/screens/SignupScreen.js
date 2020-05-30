import React, {useState} from 'react';
import {View, StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'; //helpottaa stylingiä..?
import Spacer from '../components/Spacer';




const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return(
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>

            <Input label= 'Email'
                    value= {email}
                    onChangeText={(newEmail) => setEmail(newEmail)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    />

            <Spacer />
                <Input label= 'Password'
                        value = {password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                    />
            <Spacer>
                <Button title="Sign Up"></Button>
            </Spacer>
        </View>
    )
};
    //kumotaan navigationin perusasetus.
    SignupScreen.navigationOptions = () => {
        return {
            header: null
        };
    };





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
    
});


export default SignupScreen;