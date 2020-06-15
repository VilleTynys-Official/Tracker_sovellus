import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef'; //itse rakennettu globaali navigaatio


//REDUCER!!!!!!!
//dispatch suorittaa tämän reducerin (eli muuttaa statea actionin (type ja payload) mukaisesti):
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};  //jos tulee error nii stateen heitetään päällimmäiseksi payload.
        case 'signin': 
            return { errorMessage: '', token: action.payload }; //nollaa errorMessagen ja asettaa tokenin stateen.        
        case 'signup': 
            return { errorMessage: '', token: action.payload };
        case 'signout': 
            return { token: null, errorMessage: '' }; 
        case 'clear_error_message': 
            return { ...state, errorMessage:'' }; 
        default:
            return state;
    }
};






//..USING IMPLICIT RETURN FUNCTIONS (Returnia ei tarvii kirjoittaa)
//katsotaan löytyykö token cachesta.
const tryLocalSignin = dispatch => async () =>{
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    }else {
        navigate('Signup');
    }
}



const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'})
};



//rakennetaan actionit joita kutsutaan
const signup =  (dispatch) => async ({ email, password }) => {
        //make api request to sign up with that email and password
        //jos sign up onnistui, muutetaan tilaa
        //jos singup epäonnistui
        try {
            const response = await trackerApi.post('/signup', { email, password});
            await AsyncStorage.setItem( 'token', response.data.token) //tallennetaan token puhelimen muistiin.
            dispatch({ type: 'signup', payload: response.data.token}) //update the state
            // console.log('token tallennettu stateen ja cacheen.')
            
            //navigate to main flow
            navigate('TrackList')

        }catch(err){
            console.log('**** errori on: ', err)
            dispatch({ 
                type: 'add_error',
                payload: 'Something went wrong with signup'
            });
    };
};



const signin = (dispatch) => async ({ email, password}) =>{
        //api request
        //handle success
        //handle fail
        try{
            const response = await trackerApi.post('/signin', { email, password});
            await AsyncStorage.setItem('token', response.data.token); //key ja value
            dispatch({ type: 'signin', payload: response.data.token});
            //kun valmis, navigoidaan main flowiin.
            navigate('TrackList')


        }catch(err){
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in.'
            });
        }
    };


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout'})
    navigate('loginFlow');
};


//hyödynnetään createDataContext komponenttia ja luodaan Contexti, jossa on sisäänkirjautumiseen liittyvät tilat ja funktiot.
export const { Provider, Context} = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: ''}
);