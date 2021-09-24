import * as actionTypes from '../actionTypes';

//API Key
const musicApp = {};
musicApp.audioDBBaseurl = "https://www.theaudiodb.com/api/v1/json"; 
musicApp.audioDBAPI = "523532";
const searchArt = 'search.php?s='
const searchAlbum = 'searchalbum.php?s='

export const loading = () => {
    return {type: actionTypes.LOADING}
}

export const addArtist = ([artObj, albumObj]) => {
    return {type: actionTypes.ADD_ARTIST ,artist: artObj.artists, albums: albumObj.album}
};

export const submitArtist = artist => {
    return {type: actionTypes.SUBMIT_ARTIST, artist: artist}
}

export const error = err => {
    return {type: actionTypes.ERROR, error: err}
}


export const addArtistThunk = (artist) => {
    //artist general info
    // const url = `${musicApp.audioDBBaseurl}/${musicApp.audioDBAPI}/search.php?s=${artist}`
    //discography
    const urlArt =  `${musicApp.audioDBBaseurl}/${musicApp.audioDBAPI}/${searchArt}${artist}`
    const urlAlbum =  `${musicApp.audioDBBaseurl}/${musicApp.audioDBAPI}/${searchAlbum}${artist}`
    return (dispatch) => {
        return (
        dispatch(loading()),
        Promise.all([fetch(urlArt),fetch(urlAlbum)])
            .then(responses => {
                    return Promise.all(responses.map(response => {
                        if (response.ok){
                            console.log('response okay')
                            return response.json()
                                                
                        }//get response but not ok
                        else {
                            const error = new Error(`Error ${response.status}: ${response.statusText}`)
                            error.response = response;
                            // throw error;
                            console.log('response err')
                            return dispatch(error({error:'Artist Not Found'}))
                        }
                    }
                ))
            })
            .then(
                data => {console.log(data)
                    if (data[0].artists === null) {
                        return dispatch(error({error:'Artist Not Found'}))
                    }
                    else if (data[1].album === null){
                        return dispatch(error({error:'Artist Not Found'}))
                    }
                    else{
                        return dispatch(addArtist(data))
                    }
                        
                }
            )
            .catch(err =>dispatch(error(err))
            )
        )
    }
}