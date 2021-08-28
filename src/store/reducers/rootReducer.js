import * as actionTypes from '../actionTypes';

const iniState = {
    errors: false,
    loading:false,
    artist: '',
    artistEnter:'',
    artistSelected: false
}

const rootReducer = (state = iniState, action ) => {
    switch(action.type){
        case(actionTypes.ADD_ARTIST):
            return {...state, artist: action.artist, errors:false, loading:false, artistEnter: '', artistSelected: false}
        case(actionTypes.ENTER_ARTIST):
            return{...state, errors:false, loading:false, artistEnter: action.artistEnter, artistSelected:true}
        case(actionTypes.ERROR):
            return{...state, error:true, loading: false}
        default:
            return state;
    }
}

export default rootReducer;