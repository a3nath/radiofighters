import * as actionTypes from '../actionTypes';

const iniState = {
    error: false,
    loading:false,
    artist: '',
    artistEnter:'',
    artistSelected: false
}

const rootReducer = (state = iniState, action ) => {
    switch(action.type){
        case (actionTypes.LOADING):
            return {...state, loading:true, error:false}
        case(actionTypes.ADD_ARTIST):
            return {...state, artist: action.artist, error:false, loading:false, artistEnter: '', artistSelected: false}
        case(actionTypes.ENTER_ARTIST):
            return{...state, error:false, loading:false, artistEnter: action.artistEnter, artistSelected:true}
        case(actionTypes.ERROR):
            return{...state, error:true, loading: false}
        default:
            return state;
    }
};

export default rootReducer;