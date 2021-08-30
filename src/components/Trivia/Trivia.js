import React from 'react';
import { connect } from 'react-redux';

const Trivia = props => {

    const TriviaArr = []

    console.log('Trivia')
    return props.artist.intFormedYear
}

// const mapStateToProps = state => {
//     return {
//         year: state.artistReducer.artist[0]
//     };
// }
export default connect(null)(Trivia);