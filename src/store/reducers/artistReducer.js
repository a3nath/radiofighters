import * as actionTypes from '../actionTypes';

const iniState = {
    error: false,
    loading:false,
    artist: [],
    artistEnter:'',
    artistSelected: false
    //artist object which will store questions and answers
};

const artistReducer = (state = iniState, action ) => {
    console.log(state)
    console.log(action)
    if (action){
        switch(action.type){
            case (actionTypes.LOADING):
                return {...state, loading:true, error:false}
            case (actionTypes.ADD_ARTIST):
                console.log('reducer')
                console.log(...action.artist)
                return {...state, artist: action.artist, error:false, loading:false, artistEnter: '', artistSelected: false}
            // case (actionTypes.ENTER_ARTIST):
            //     return {...state, error:false, loading:false, artistEnter: action.artistEnter, artistSelected:true}
            case (actionTypes.ERROR):
                return {...state, error:true, loading: false}
            default:
                return state;
        }
    }
    return state
};

export default artistReducer;