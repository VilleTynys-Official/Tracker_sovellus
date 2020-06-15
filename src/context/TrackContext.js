import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
    switch (action.type){
        case 'action_yggönen':{
            return state
        }
        default:
            return state;
    };
};


const fetchTrack =dispatch => () =>{};
const createTrack = dispatch => (name, locations) =>{
    console.log('apiin luodaan track jonka tiedot ovat:', name, locations.length);
};

export const { Provider, Context} = createDataContext(
    trackReducer,
    { fetchTrack, createTrack},
    []
);