import React, {useState} from 'react';
import {StyleSheet } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'; //helpottaa stylingiä..?
import Spacer from '../components/Spacer';


/**komponentti, jota käytetään signup ja signin screenissä. */

const AuthForm= ({ headerText, errorMessage, onSubmit, submitButtonText } ) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
                    {errorMessage? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText}
                        onPress={ () => onSubmit({ email, password})}/>
            </Spacer>
        </>
        )


}


const styles =StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft:15,
        marginTop: 15
    },
});

export default AuthForm;


