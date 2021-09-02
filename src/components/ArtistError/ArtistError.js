import React from 'react';

const ArtistError = props => {
return <div>
        <p>{props.errMess}</p>
        <p>Please check your artist spelling or try another artist </p>
        </div>

}

export default ArtistError;