import React from 'react';
import { connect } from 'react-redux';

const Trivia = props => {
    console.log('Trivia')
    return props.year.intFormedYear
}

const mapStateToProps = state => {
    return {
        year: state.artistReducer.artist[0]
    };
}
export default connect(mapStateToProps)(Trivia);