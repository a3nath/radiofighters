import React from 'react';
import { connect } from 'react-redux';

const artistList = props => {
    
     const dataArr = []

     const filterRes = (reg, data) => {
         const regex = new RegExp(reg, 'ig')
         return data.filter(artist => artist.match(regex))
     }

     const displayMatches = () => {
         const newArr = filterRes(props.artist, dataArr)
         const resultArtist = newArr.map(artist => {
             return `<li><span>${artist}</span<</li>`
         })
     }

    return (
        <ul>
            {displayMatches}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        artist: state.rootReducer.artist
    }
}

export default connect(mapStateToProps)(artistList);