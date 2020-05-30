import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';




const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//rakennetaan actionit joita kutsutaan
//dispatch vastaanottaa "globaalin" kutsun.
const signup =  (dispatch) => {
    return async ({ email, password }) => {
        //make api request to sign up with that email and password
        //jos sign up onnistui, muutetaan tilaa
        //jos singup epäonnistui
        try {
            const response = await trackerApi.post('/signup', { email, password});
            console.log(response.data);
        } catch (err){
            console.log(err.message);

        };
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
    { isSignedIn: false}
)