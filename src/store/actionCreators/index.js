import * as actionTypes from '../actionTypes';

//API Key
const musicApp = {};
musicApp.audioDBBaseurl = "https://www.theaudiodb.com/api/v1/json";
musicApp.audioDBAPI = "523532";

export const loading = () => {
    return {type: actionTypes.LOADING}
}

export const enterArtist = artist => {
    return {type: actionTypes.ENTER_ARTIST, artistEnter: artist}
}

export const addArtist = artist => {
    return {type: actionTypes.ADD_ARTIST ,artist: artist}
}

export const submitArtist = artist => {
    return {type: actionTypes.SUBMIT_ARTIST, artist: artist}
}

export const error = err => {
    return {type: actionTypes.ERROR, errro: err}
}


export const addArtistThunk = (artist) => {
    const url = `${musicApp.audioDBBaseurl}/${musicApp.audioDBAPI}/search.php?s=${artist}`
    return (dispatch) => {
        return(fetch(url)
            .then(response => {
                    if (response.ok){
                        return response                    
                    }//get response but not ok
                    else {
                        const error = new Error(`Error ${response.status}: ${response.statusText}`)
                        error.response = response;
                        throw error;
                    }
                },
                //if you dont get response
                error => {
                        const errMess = new Error(error.message);
                        throw errMess;
                    }
            )
            .then(res => res.json())// dispatch(addArtist(res.json()))
            //artist object
            .then(value => dispatch(addArtist([value.artists[0]]))
                // dispatch(addArtist(value.artists[0].strArtist))
            )
            .catch(err => dispatch(error(err)))
            )
        }
}

