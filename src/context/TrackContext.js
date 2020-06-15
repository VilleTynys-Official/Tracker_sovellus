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


const fetchTracks =dispatch => () =>{};
const createTracks = dispatch => () =>{};

export const { Provider, Context} = createDataContext(
    trackReducer,
    { fetchTracks, createTracks},
    []
);