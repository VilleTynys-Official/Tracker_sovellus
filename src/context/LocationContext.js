import createDataContext from './createDataContext';

//provider
const locationReducer = (state, action) =>{
    switch (action.type){
        case 'add_current_location':
            return{ ...state, currentLocation: action.payload}
        case 'start_recording':
            return{ ...state, recording: true}
        case 'stop_recording':
            return{ ...state, recording: false}
        case 'add_location':
            return{ ...state, locations: [...state.locations, action.payload]} //lisätän uudet location tiedot
        case 'change_name':
            return{ ...state, name: action.payload}
        default:    
            return state;
    }
};

//action funktiot
const changeName = dispatch => (name) =>{
    dispatch({ type: 'change_name', payload: name });
}

const startRecording = dispatch => () =>{
    dispatch( {type: 'start_recording'});
};
const stopRecording = dispatch => () => {
    dispatch ({ type: 'stop_recording'});
};
const addLocation = dispatch => (location, recording) => {
    //huom et seuraa kokoajan koska simulointi lähettää gps dataa kokoajan.
    // jatkuvan seurannan pitäisi loppua kun gps dataa ei enää simuloida.
    console.log('Sovellus saa gps sijainnin ja päivittää sen stateen.');
    dispatch({ type: 'add_current_location', payload: location })
    if(recording){
        dispatch ({ type: 'add_location', payload: location})
    }
};


export const{ Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName},
    { name: '', recording: false, locations: [], currentLocation: null }
)