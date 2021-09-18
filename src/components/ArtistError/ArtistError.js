import React from 'react';

const ArtistError = props => {
return <div>
                <p>{props.errMess}</p>
                <p>Opps, looks like we don't have this artist. Please check the spelling or try a different artist</p>
        </div>

}

export default ArtistError;