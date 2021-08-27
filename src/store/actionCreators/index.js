import * as actionTypes from '../actionTypes';

//API Key
const musicApp = {};
musicApp.audioDBBaseurl = "https://www.theaudiodb.com/api/v1/json/";
musicApp.audioDBApi = "1";

export const addArtist = artist => {
    return {type: actionTypes.ADD_ARTIST ,artist: artist}
}

export const submitArtist = artist => {
    return {type: actionTypes.SUBMIT_ARTIST, artist: artist}
}

export const addArtistThunk = (artist) => {
    return (dispath) => {
        const url = `${musicApp.audioDBBaseurl}/${musicApp.audioDBApi}/searchalbum.php?s=${artist}`
        return(
            fetch.get(url)
            .then(response => {console.log(response.json)
                    dispath(addArtist(response.json))
                }
            )
        )
    }
}