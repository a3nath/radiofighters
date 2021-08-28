import * as actionTypes from '../actionTypes';

//API Key
const musicApp = {};
musicApp.audioDBBaseurl = "https://www.theaudiodb.com/api/v1/json";
musicApp.audioDBApi = "1";

export const addArtist = artist => {
    return {type: actionTypes.ADD_ARTIST ,artist: artist}
}

export const submitArtist = artist => {
    return {type: actionTypes.SUBMIT_ARTIST, artist: artist}
}

export const addArtistThunk = (artist) => {
    return (dispath) => {
        const url = `${musicApp.audioDBBaseurl}/${musicApp.audioDBApi}/search.php?s=${artist}`
        return(
            fetch(url)
            .then(response => {
                    console.log(response)
                    // dispath(addArtist(response.json))
                }
            )
        )
    }
}

export const enterArtist = artist => {
    return {type: actionTypes.ENTER_ARTIST, artistEnter: artist}
}
