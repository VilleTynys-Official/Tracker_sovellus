import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator} from './src/navigationRef';

//STICHING TOGETHER THE NAVIGATORS
//switch on ylin navigaatio täs sovelluksessa.
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),

    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});



const App= createAppContainer(switchNavigator);

//otetaan Authprovider parentiksi koko sovellukselle. (jotta kaikki pääsevät siihen käsiksi)
export default () =>{
  return (
    <AuthProvider>
      {/* annetaan navigointi kaikille navigationRef avulla. */}
      <App ref={ (navigator) => {setNavigator(navigator)}} />    
    </AuthProvider>
  )
} 