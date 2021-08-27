import * as actionTypes from '../actionTypes';

const iniState = {
    errors: false,
    loading:false,
    artist: []
}

const rootReducer = (state = iniState, action ) => {
    switch(action.type){
        case(actionTypes.ADD_ARTIST):
            return {...state, artist: state.artist.concat(action.artist), errors:false, loading:false}
        default:
            return state;
    }
}

export default rootReducer;