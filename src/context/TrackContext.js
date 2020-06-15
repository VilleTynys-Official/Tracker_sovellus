import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'action_yggönen': {
            return state
        }
        default:
            return state;
    };
};


const fetchTrack = dispatch => () => { };

//hyödynnetään tokenia.
const createTrack = dispatch => async (name, locations) => {
    // console.log('*** tallennetaan track tiedoiksi :', name, locations)
    await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTrack, createTrack },
    []
);