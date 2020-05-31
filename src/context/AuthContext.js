import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';



//dispatch suorittaa tämän reducerin (eli muuttaa statea actionin (type ja payload) mukaisesti):
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};  //jos tulee error nii stateen heitetään päällimmäiseksi payload.
        case 'signup':
            return { errorMessage: '', token: action.payload }; //nollaa errorMessagen ja asettaa tokenin stateen.
        default:
            return state;
    }
};

//..USING IMPLICIT RETURN FUNCTIONS (Returnia ei tarvii kirjoittaa)

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
            console.log(err)
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup'
            });
    };
};

const signin = (dispatch) =>{
    return ({ email, password}) =>{
        //api request

        //handle success

        //handle fail
    };
};

const signout = dispatch =>{
    return () => {
        //kirjaudutaan ulos jotenkin
    };
};


//hyödynnetään createDataContext komponenttia ja luodaan Contexti, jossa on sisäänkirjautumiseen liittyvät tilat ja funktiot.
export const { Provider, Context} = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: ''}
);