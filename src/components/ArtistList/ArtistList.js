import React from 'react';
import { connect } from 'react-redux';

const artistList = props => {
    return (
        <ul>
            <li></li>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        artists: state.rootReducer.artist
    }
}


export default connect(mapStateToProps)(artistList);