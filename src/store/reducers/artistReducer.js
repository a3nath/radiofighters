import * as actionTypes from '../actionTypes';

const iniState = {
    error: null,
    loading:false,
    artist: [],
    albums:[],
    artistEnter:'',
    artistSelected: false
    //artist object which will store questions and answers
};

const artistReducer = (state = iniState, action ) => {
    if (action){
        switch(action.type){
            case (actionTypes.LOADING):
                return {...state, loading:true, error:null}
            case (actionTypes.ADD_ARTIST):
                return {...state, artist: action.artist, albums: action.albums,error:null, loading:false}
            case (actionTypes.ERROR):
                return {...state, artist: [], albums: [], error:action.error, loading: false}
            default:
                return state;
        }
    }
    return state
};

export default artistReducer;