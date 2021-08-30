import * as actionTypes from '../actionTypes';

const iniState = {
    error: false,
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
                return {...state, loading:true, error:false}
            case (actionTypes.ADD_ARTIST):
                return {...state, artist: action.artist, albums: action.albums,error:false, loading:false, artistEnter: '', artistSelected: false}
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