import createDataContext from './createDataContext';




const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//rakennetaan actionit joita kutsutaan

const signup = (dispatch) => {
    //tätä kutsutaan komponentista
    return({ email, password }) => {
        //make api request to sign up with that email and password

        //jos sign up onnistui, muutetaan tilaa

        //jos singup epäonnistui
    };
};

const signin = (dispatch) =>{
    return ({ email, password}) =>{
        //api request

        //handle success

        //handle fail
    };
};

const signout = (dispatch) =>{
    return () => {
        //kirjaudutaan ulos jotenkin
    };
};


//hyödynnetään createDataContext komponenttia ja luodaan Contexti, jossa on sisäänkirjautumiseen liittyvät tilat ja funktiot.
export const{ Provider, Context} = createDataContext(
    authReducer,
    {},
    { signin, signout, signup },
    { isSignedIn: false}
)