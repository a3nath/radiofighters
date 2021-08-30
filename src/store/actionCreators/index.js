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
    //artist general info
    // const url = `${musicApp.audioDBBaseurl}/${musicApp.audioDBAPI}/search.php?s=${artist}`
    //discography
    const urlArt =  `${musicApp.audioDBBaseurl}/${musicApp.audioDBAPI}/${searchArt}${artist}`
    const urlAlbum =  `${musicApp.audioDBBaseurl}/${musicApp.audioDBAPI}/${searchAlbum}${artist}`
    return (dispatch) => {
        Promise.all([fetch(urlArt),fetch(urlAlbum)])
            .then(responses => {
                    return Promise.all(responses.map(res => res.json()))})
            .then(
                data => console.log(data)
            )
            .catch(err => dispatch(error(err)));
        }
}
            
        

        
        
//         return(fetch(url)
//             .then(response => {
//                     if (response.ok){
//                         return response                    
//                     }//get response but not ok
//                     else {
//                         const error = new Error(`Error ${response.status}: ${response.statusText}`)
//                         error.response = response;
//                         throw error;
//                     }
//                 },
//                 //if you dont get response
//                 error => {
//                         const errMess = new Error(error.message);
//                         throw errMess;
//                     }
//             )
//             .then(res => res.json())// dispatch(addArtist(res.json()))
//             //artist object
//             .then(value => console.log(value)
//                 // dispatch(addArtist([value.artists[0]]))
//             )
//             .catch(err => dispatch(error(err)))
//             )
//         }
// }